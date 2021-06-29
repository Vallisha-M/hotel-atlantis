require("dotenv").config();
const router = require("express").Router();
let Formal = require("../models/formal.model");
const nodemailer = require("nodemailer");
const nodemail = process.env.EMAIL;
const nodePass = process.env.EMAIL_PASS;
let Token = require("../models/token.model");
const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: nodemail,
		pass: nodePass,
	},
});

router.route("/show_email").get(async (req, res) => {
	const token = req.query.token;
	var email = req.query.email;
	var flag1 = false;
	await Token.find({ email: email }, { _id: 0 }).then((ress) => {
		if (res != null && ress[0].token == token) {
			flag1 = true;
		} else return res.sendStatus(500).json({ done: 0 });
	});
	if (flag1) {
		await Formal.find({ email: email })
			.then((fevents) => {
				res.json(fevents);
			})
			.catch((err) => res.status(400).json("Error: " + err));
	}
});
router.route("/").get((req, res) => {
	Formal.find()
		.then((formal) => res.json(formal))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.post("/cancel", async (req, res) => {
	console.log("body = ");
	const token = req.body.token;
	var flag1 = false;
	await Token.find({ email: req.body.email }, { _id: 0 }).then((ress) => {
		if (ress[0].token == token) {
			flag1 = true;
		} else return res.sendStatus(500).json({ done: 0 });
	});
	if (flag1) {
		await Formal.deleteOne({ email: req.body.email, date: req.body.date })
			.then(() => {
				console.log("in done");
				var mailOptions = {
					from: nodemail,
					to: req.body.email,
					subject: "Hotel Atlantis - Formal Event Cancellation",
					html:
						"<div style='font-size:20px'>A formal event has been cancelled bearing the following details.<table><td>Guests</td><td>" +
						req.body.guests +
						"</td></tr><tr><td>Date(YYYY/MM/DD)</td><td>" +
						req.body.date +
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
router.route("/add").post(async (req, res) => {
	var flag1 = false;
	const token = req.body.token;
	const email = req.body.email;
	const guests = req.body.guests;
	const date = req.body.date;
	await Token.find({ email: email }, { _id: 0 }).then((ress) => {
		if (ress[0].token == token) {
			flag1 = true;
		} else return res.sendStatus(500).json({ done: 0 });
	});
	if (flag1) {
		var flag = true;
		await Formal.find({ date: date }).then((ress) => {
			if (ress.length > 0) {
				flag = false;
				return res.json({ done: 0, duplicate: 1 });
			}
		});
		if (flag) {
			const newFormal = new Formal({
				email: email,
				guests: guests,
				date: date,
			});

			newFormal
				.save()
				.then(() => {
					var mailOptions = {
						from: nodemail,
						to: email,
						subject: "Hotel Atlantis - Formal Event Confirmation",
						html:
							"<div style='font-size:20px'>A formal event has been booked with your account with the following details.<table><td>Guests</td><td>" +
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
					res.json({ error: 1, done: 0 });
				});
		}
	}
});

module.exports = router;
