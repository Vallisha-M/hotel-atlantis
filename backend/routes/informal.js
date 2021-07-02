require("dotenv").config();
const router = require("express").Router();
let Informal = require("../models/informal.model");
const nodemailer = require("nodemailer");
const nodemail = process.env.EMAIL;
const nodePass = process.env.EMAIL_PASS;
let Token = require("../models/token.model");
router.route("/show_email").get(async (req, res) => {
	var email = req.query.email;
	var token = req.query.token;
	var flag1 = false;
	await Token.find({ email: email }, { _id: 0 }).then((ress) => {
		if (ress != null && ress[0].token == token) {
			flag1 = true;
		} else return res.sendStatus(500).json({ done: 0 });
	});
	if (flag1) {
		await Informal.find({ email: email })
			.then((informal) => res.json(informal))
			.catch((err) => res.status(400).json("Error: " + err));
	}
});
router.route("/").get((req, res) => {
	Informal.find()
		.then((informal) => res.json(informal))
		.catch((err) => res.status(400).json("Error: " + err));
});
const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: nodemail,
		pass: nodePass,
	},
});
router.route("/add").post(async (req, res) => {
	var flag1 = false;
	const email = req.body.email;
	const venue = req.body.venue;
	const adjective = req.body.adjective;
	const guests = req.body.guests;
	const date = req.body.date;
	const token = req.body.token;
	await Token.find({ email: email }, { _id: 0 }).then((ress) => {
		if (ress[0].token == token) {
			flag1 = true;
		} else {
			res.sendStatus(500).json({ done: 0 });
		}
	});
	if (flag1) {
		var flag = true;
		await Informal.find({ venue: venue, date: date }, { _id: 0 }).then(
			(ress) => {
				if (ress.length > 0) {
					flag = false;
					return res.json({ done: 0, duplicate: 1 });
				}
			}
		);
		if (flag) {
			const newInformal = new Informal({
				email: email,
				venue: venue,
				adjective: adjective,
				guests: guests,
				date: date,
			});

			await newInformal
				.save()
				.then(() => {
					var mailOptions = {
						from: nodemail,
						to: email,
						subject:
							"Hotel Atlantis - Informal Evenet Confirmation",
						html:
							"<div style='font-size:20px'>An informal event has been booked with your account with the following details.<table><tr><td>Venue</td><td>" +
							venue +
							"</td></tr><tr><td>Event Type</td><td>" +
							adjective +
							"</td></td><tr><td>Guests</td><td>" +
							guests +
							"</td></tr><tr><td>Date(YYYY/MM/DD)</td><td>" +
							date +
							"</td></tr></table></div>",
					};
					transporter.sendMail(mailOptions, function (error, info) {
						if (error) {
							console.log(error);
						} else {
							console.log("Email sent: " + info.response);
						}
						res.json({ done: 1 });
					});
				})
				.catch((err) => {
					console.log(err);
					res.json({ done: 0, error: 1 });
				});
		}
	}
});
router.post("/cancel", async (req, res) => {
	const email = req.body.email;
	const venue = req.body.venue;
	const guests = req.body.guests;
	const date = req.body.date;
	const adjective = req.body.eventType;
	const token = req.body.token;
	var flag1 = false;
	await Token.find({ email: email }, { _id: 0 }).then((ress) => {
		if (ress[0].token == token) {
			flag1 = true;
		} else {
			return res.sendStatus(500).json({ done: 0 });
		}
	});
	if (flag1) {
		await Informal.deleteOne({ venue: venue, date: date })
			.then(() => {
				console.log("in done");
				var mailOptions = {
					from: nodemail,
					to: email,
					subject: "Hotel Atlantis - Informal Event Cancellation",
					html:
						"<div style='font-size:20px'>An informal event has been cancelled bearing the following details.<table><tr><td>Venue</td><td>" +
						venue +
						"</td></tr><tr><td>Event Type</td><td>" +
						adjective +
						"</td></td><tr><td>Guests</td><td>" +
						guests +
						"</td></tr><tr><td>Date(YYYY/MM/DD)</td><td>" +
						date +
						"</td></tr></table></div>",
				};
				transporter.sendMail(mailOptions, function (error, info) {
					if (error) {
						console.log(error);
					} else {
						console.log("Email sent: " + info.response);
					}
					res.json({ done: 1 });
				});
			})
			.catch((err) => res.json({ done: 0 }));
	}
});

router.patch("/update/", async (req, res) => {
	try {
		const informal = Informal.findById({ _id: req.query.id });
		informal.uniqueid = informal.uniqueid;
		informal.venue = req.body.venue || informal.venue;
		informal.adjective = req.body.adjective || informal.adjective;
		informal.describe = req.body.describe || informal.describe;
		informal.guests = req.body.guests || informal.guests;
		informal.services = req.body.services || informal.services;
		informal.date = req.body.date || informal.date;
		await informal
			.save()
			.then(() => res.json("Event details updated"))
			.catch((err) => res.status(400).json("Error: " + err));
	} catch (err) {
		res.status(400).json("Error: " + err);
	}
});
module.exports = router;
