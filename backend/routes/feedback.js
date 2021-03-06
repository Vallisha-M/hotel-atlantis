require("dotenv").config()
const router = require("express").Router()
let Feedback = require("../models/feedback.model")
let Token = require("../models/token.model")
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

router.route("/add").post(async (req, res) => {
  const email = req.body.email
  const star = req.body.star
  const describe = req.body.describe
  var flag = true
  var flag1 = false
  const token = req.body.token
  console.log(token)
  await Token.find({ email: email }, { _id: 0 }).then((ress) => {
    if (ress[0] != undefined && ress[0].token == token) {
      flag1 = true
    } else {
      console.log("here")
      res.json({ done: 0 })
    }
  })
  if (flag1) {
    const newFeedback = new Feedback({
      email: email,
      star: star,
      describe: describe,
    })

    newFeedback
      .save()
      .then(() => {
        var mailOptions = {
          from: nodemail,
          to: email,
          subject: "Hotel Atlantis - Feedback",
          html:
            "<div style='font-size:20px'>Thank you for rating us " +
            star +
            " stars. Your feedback will help us serve you better next time. <br/><br/></div>Thank you,<br/>Hotel Atlantis",
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
