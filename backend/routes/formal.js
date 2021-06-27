<<<<<<< HEAD

const router = require('express').Router();
let Formal = require('../models/formal.model');

router.route('/').get((req, res) => {
  Formal.find()
    .then(formal => res.json(formal))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const uniqueid = req.cookies['uniqueid'];
  const describe = req.body.describe;
  const guests = req.body.guests;  
  const date = Date.parse(req.body.date);
  const newFormal = new Formal({
    uniqueid : uniqueid,
    describe:describe,
    guests:guests,
    date:date
  });

router.delete('/delete/:id' , async(req,res) => {
    await(Formal.deleteOne({"_id" : req.params.id}))
    .then(() => res.json("Formal event cancelled"))
    .catch(err => res.status(400).json('Error ' + err));
})

router.patch('/update/:id' , async(req,res) => {
    try{
      const formal = Formal.findById({"_id" : req.params.id});
      formal.uniqueid = formal.uniqueid;
      formal.describe  = req.body.describe || formal.describe;
      formal.guests = req.body.guests || formal.guests;
      formal.date = req.body.date || formal.date;
      await(formal.save())
        .then(() => res.json('Event details updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    }
    catch(err){
      res.status(400).json('Error: ' + err);
    }
})

  newFormal.save()
    .then(() => res.json('Formal event added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
=======
require("dotenv").config()
const router = require("express").Router()
let Formal = require("../models/formal.model")
const nodemailer = require("nodemailer")
const nodemail = process.env.EMAIL
const nodePass = process.env.EMAIL_PASS
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: nodemail,
    pass: nodePass,
  },
})
router.route("/").get((req, res) => {
  Formal.find()
    .then((formal) => res.json(formal))
    .catch((err) => res.status(400).json("Error: " + err))
})

router.delete("/delete/", async (req, res) => {
  await Formal.remove({ email: req.body.email }, false)
    .then(() => res.json({ done: 1 }))
    .catch((err) => res.json({ done: 0 }))
})
router.route("/add").post(async (req, res) => {
  const email = req.body.email
  const guests = req.body.guests
  const date = req.body.date
  var flag = true
  await Formal.find({ date: date }).then((ress) => {
    if (ress.length > 0) {
      flag = false
      return res.json({ done: 0, duplicate: 1 })
    }
  })
  if (flag) {
    const newFormal = new Formal({
      email: email,
      guests: guests,
      date: date,
    })

    newFormal
      .save()
      .then(() => {
        var mailOptions = {
          from: nodemail,
          to: email,
          subject: "Hotel Atlantis - Formal Event Confirmation",
          html:
            "<div style='font-size:20px'>An formal event has been booked with your account with the following details.<table><td>Guests</td><td>" +
            guests +
            "</td></tr><tr><td>Date(YYYY/MM/DD)</td><td>" +
            date +
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

module.exports = router
>>>>>>> e8b0b781f8b090341cce6576ca20f0c4ce16bf8a
