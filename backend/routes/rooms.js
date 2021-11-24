require("dotenv").config();
const router = require("express").Router();
let Rooms = require("../models/rooms.model");
const Token = require("../models/token.model");
const nodemailer = require("nodemailer");
const nodemail = process.env.EMAIL;
const nodePass = process.env.EMAIL_PASS;
let transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		user: nodemail,
		pass: nodePass,
	},
});

function switchfunc(roomtype) {
	switch (roomtype) {
		case "standard_room":
			return "Standard Room";
		case "deluxe_room":
			return "Deluxe Room";
		case "suite":
			return "Suite";
	}
}

router.route("/show").get(async (req, res) => {
	var checkindate = req.query.checkindate;
	var checkoutdate = req.query.checkoutdate;
	var roomtype = req.query.roomtype;
	await Rooms.find({
		roomtype: roomtype,
		checkindate: { $lte: checkindate },
		checkoutdate: { $gte: checkoutdate },
	})
		.then((rooms) => {
			res.json(rooms);
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/show_email").get(async (req, res) => {
	const email = req.query.email;
	const token = req.query.token;
	var flag1 = false;
	await Token.find({ email: req.query.email }, { _id: 0 }).then((ress) => {
		if (ress[0].token == token) {
			flag1 = true;
		} else {
			return res.json({ done: 0 });
		}
	});
	if (flag1) {
		await Rooms.find({
			email: email,
		})
			.then((rooms) => {
				res.json(rooms);
				//console.log(rooms);
			})
			.catch((err) => res.status(400).json("Error: " + err));
	}
});

// UPDATE
router.patch("/update/:id", async (req, res) => {
	try {
		const room = await Rooms.findById(req.params.id);
		room.uniqueid = room.uniqueid;
		room.checkindate = Date.parse(req.body.checkindate) || room.checkindate;
		room.checkoutdate =
			Date.parse(req.body.checkoutdate) || room.checkoutdate;
		room.roomtype = req.body.roomtype || room.roomtype;
		room.numberofpeople =
			Number(req.body.numberofpeople) || room.numberofpeople;
		await room
			.save()
			.then(() => res.json("Room details updated"))
			.catch((err) => res.status(400).json("Error: " + err));
	} catch (err) {
		res.status(400).json("Error: " + err);
	}
});

// POST
router.route("/add").post(async (req, res) => {
	const token = req.body.token;
	const checkindate = Date.parse(req.body.checkindate);
	const checkoutdate = Date.parse(req.body.checkoutdate);
	const roomtype = req.body.roomtype;
	const numberofpeople = Number(req.body.numberofpeople);
	const email = req.body.email;
	var flag1 = false;
	await Token.find({ email: req.body.email }, { _id: 0 }).then((ress) => {
		if (ress[0].token == token) {
			flag1 = true;
		} else {
			return res.json({ done: 0 });
		}
	});
	if (flag1) {
		const newRoom = new Rooms({
			checkindate: checkindate,
			checkoutdate: checkoutdate,
			roomtype: roomtype,
			numberofpeople: numberofpeople,
			email: email,
		});
		newRoom
			.save()
			.then(() => {
				var mailOptions = {
					from: nodemail,
					to: req.body.email,
					subject: "Hotel Atlantis - Room Booking Confirmed",
					html:
						"<div style='font-size:20px'>Your room booking has been confirmed bearing the following details.<table><td>Check-in Date(YYYY/MM/DD)</td><td>" +
						req.body.checkindate.substring(0, 10) +
						"</td></tr><tr><td>Check-out Date(YYYY/MM/DD)</td><td>" +
						req.body.checkoutdate.substring(0, 10) +
						"</td></tr><tr><td>Room Type</td><td>" +
						switchfunc(req.body.roomtype) +
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
				res.json({ done: 0 });
			});
	}
});

router.route("/cancel").post(async (req, res) => {
	const token = req.body.token;
	var flag1 = false;
	await Token.find({ email: req.body.email }, { _id: 0 }).then((ress) => {
		if (ress[0].token == token) {
			flag1 = true;
		} else {
			return res.sendStatus(500).json({ done: 0 });
		}
	});
	if (flag1) {
		await Rooms.deleteOne({
			checkindate: req.body.checkindate,
			checkoutdate: req.body.checkoutdate,
			roomtype: req.body.roomtype,
			numberofpeople: req.body.numberofpeople,
			email: req.body.email,
		})
			.then((result) => {
				//console.log(result);
				var mailOptions = {
					from: nodemail,
					to: req.body.email,
					subject: "Hotel Atlantis - Room Booking Cancellation",
					html:
						"<div style='font-size:20px'>Your room booking has been cancelled bearing the following details.<table><td>Check-in Date(YYYY/MM/DD)</td><td>" +
						req.body.checkindate.substring(0, 10) +
						"</td></tr><tr><td>Check-out Date(YYYY/MM/DD)</td><td>" +
						req.body.checkoutdate.substring(0, 10) +
						"</td></tr><tr><td>Room Type</td><td>" +
						switchfunc(req.body.roomtype) +
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

module.exports = router;
