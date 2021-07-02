require("dotenv").config()
const router = require('express').Router()
let Indian = require('../models/indian.model')
const nodemailer = require("nodemailer")
const nodemail = process.env.EMAIL
const nodePass = process.env.EMAIL_PASS
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
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: nodemail,
    pass: nodePass,
  },
})
router.route('/').get((req, res) => {
  Indian.find()
    .then((indian) => res.json(indian))
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/add').post(async(req, res) => {
 
  const checkin = (req.body.checkin)
  const seats = req.body.seats
  const email = req.body.email
  const time = req.body.time
  var flag = true
  await Indian.find({ checkin: checkin,time: time }).then((ress) => {
    console.log(ress)
    if (ress.length > 0) {
      flag = false
      return res.json({ done: 0, duplicate: 1 })
    }
  })
  if (flag) {
  const newIndian = new Indian({
    email: email,
    checkin: checkin,
    seats: seats,
    time: time,
   
  })

  await newIndian
    .save()

    .then(() => {
      var mailOptions = {
        from: nodemail,
        to: email,
        subject: "Hotel Atlantis - Table Reservation Confirmation",
        html:
          "<div style='font-size:20px'>A Table  has been booked at Indian Palace with your account with the following details.<table><td>Seats</td><td>" +
          seats +"</td></tr><tr><td>Time</td><td>" +
          time +
          "</td></tr><tr><td>Date(YYYY/MM/DD)</td><td>" +
          checkin +
          "</td></tr></table></div>",
      }
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error)
        } else {
          console.log("Email sent: " + info.response)
        }
        res.json({ done: 1 })
      })
    })
    .catch((err) => {
      console.log(err)
      res.json({ error: 1, done: 0 })
    })
}
})

router.post("/cancel", async (req, res) => {
	const email = req.body.email;
	const seats = req.body.seats;
	const time = req.body.time;
	const checkin = req.body.checkin;
	
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
		await Indian.deleteOne({ checkin: checkin, time: time })
			.then(() => {
				console.log("in done");
				var mailOptions = {
					from: nodemail,
					to: email,
					subject: "Hotel Atlantis - Table Reservation Cancellation",
					html:
          "<div style='font-size:20px'>A Table  has been cancelled bearing the following details.<table><td>Seats</td><td>" +
          seats +"</td></tr><tr><td>Time</td><td>" +
          time +
          "</td></tr><tr><td>Date(YYYY/MM/DD)</td><td>" +
          checkin +
          "</td></tr></table></div>",};
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
		const indian = Indian.findById({ _id: req.query.id });
		indian.uniqueid = indian.uniqueid;
		indian.seats = req.body.seats || indian.sendStatus;
	
		indian.time = req.body.time || indian.time;
		
		indian.checkin = req.body.checkin || indian.checkin;
		await indian
			.save()
			.then(() => res.json("Reservation details updated"))
			.catch((err) => res.status(400).json("Error: " + err));
	} catch (err) {
		res.status(400).json("Error: " + err);
	}
});
module.exports = router;



