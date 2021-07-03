require("dotenv").config()
const router = require("express").Router()
let Indian_pre = require("../models/indian_pre.model")
const nodemailer = require("nodemailer")
const nodemail = process.env.EMAIL
const nodePass = process.env.EMAIL_PASS
let Token = require("../models/token.model")
router.route("/show_email").get(async (req, res) => {
  var email = req.query.email
  var token = req.query.token
  var flag1 = false
  await Token.find({ email: email }, { _id: 0 }).then((ress) => {
    if (ress != null && ress[0].token == token) {
      flag1 = true
    } else return res.sendStatus(500).json({ done: 0 })
  })
  if (flag1) {
    await Indian_pre.find({ email: email })
      .then((indian_pre) => res.json(indian_pre))
      .catch((err) => res.status(400).json("Error: " + err))
  }
})
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: nodemail,
    pass: nodePass,
  },
})
router.route("/").get((req, res) => {
  Indian_pre.find()
    .then((indian_pre) => res.json(indian_pre))
    .catch((err) => res.status(400).json("Error: " + err))
})

router.route("/add").post(async (req, res) => {
  const checkin = req.body.checkin
  const seats = req.body.seats
  const time = req.body.time
  const order = req.body.order
  const token = req.body.token
  console.log(req.body)
  const email = req.body.email
  var flag1 = false
  await Token.find({ email: email }, { _id: 0 }).then((ress) => {
    if (ress != null && ress[0].token == token) {
      flag1 = true
    } else return res.sendStatus(500).json({ done: 0 })
  })
  if (flag1) {
    var ans = `\n`
    for (const [key, value] of Object.entries(order)) {
      ans = ans.concat(`${key}: ${value}` + `<br/>`)
    }
    const newIndian_pre = new Indian_pre({
      email: email,
      checkin: checkin,
      seats: seats,
      time: time,
      order: order,
    })

    newIndian_pre
      .save()
      .then(() => {
        var mailOptions = {
          from: nodemail,
          to: email,
          subject: "Hotel Atlantis - Table and Pre-order Confirmation",
          html:
            "<div style='font-size:20px'>A Pre-order has been done at Indian Palace with your account with the following details.<table><td>Seats</td><td>" +
            seats +
            "</td></tr><tr><td>Time</td><td>" +
            time +
            "</td></tr><tr><td>Items</td><td><hr/>" +
            ans +
            "<hr/></td></tr><tr><td>Date(YYYY/MM/DD)</td><td>" +
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
  const email = req.body.email
  const seats = req.body.seats
  const time = req.body.time
  const checkin = req.body.checkin
  const token = req.body.token
  const order = req.body.order

  var flag1 = false

  var ans = `\n`
  for (const [key, value] of Object.entries(order)) {
    ans = ans.concat(`${key}: ${value}` + `<br/>`)
  }
  await Token.find({ email: email }, { _id: 0 }).then((ress) => {
    if (ress[0].token == token) {
      flag1 = true
    } else {
      return res.sendStatus(500).json({ done: 0 })
    }
  })
  if (flag1) {
    await Indian_pre.deleteOne({ checkin: checkin, time: time })
      .then(() => {
        console.log("in done")
        var mailOptions = {
          from: nodemail,
          to: email,
          subject: "Hotel Atlantis - Table and Pre-Order Cancellation",
          html:
            "<div style='font-size:20px'>A Pre-order has been cancelled at Indian Palace with your account with the following details.<table><td>Seats</td><td>" +
            seats +
            "</td></tr><tr><td>Time</td><td>" +
            time +
            "</td></tr><tr><td>Items</td><td><hr/>" +
            ans +
            "<hr/></td></tr><tr><td>Date(YYYY/MM/DD)</td><td>" +
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
      .catch((err) => res.json({ done: 0 }))
  }
})

module.exports = router
