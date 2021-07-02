require("dotenv").config()
const cors = require("cors")
const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
let User = require("./models/user.model")
let DeleteUser = require("./models/delete_user.model")
const mongoose = require("mongoose")
let Refresh = require("./models/refresh_token.model")
const crypto = require("crypto")
const nodemailer = require("nodemailer")
const url = require("url")

const app = express()
app.use(cors({ origin: "http://localhost:3000" }))
const nodemail = process.env.EMAIL

const port = process.env.PORT || 4000
const uri = process.env.ATLAS_URI
const nodePass = process.env.EMAIL_PASS
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
app.use(express.json())
app.use(express.urlencoded())
app.listen(port, () => {
  console.log(`Authorization Server is running on port: ${port}`)
})
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: nodemail,
    pass: nodePass,
  },
})
const connection = mongoose.connection
connection.once("open", () => {
  console.log("MongoDB database connection established successfully")
})
app.get("/users/delete/email/", (req, res) => {
  console.log("started")
  const adr = "http://localhost:4000" + req.url.toString()
  const q = url.parse(adr, true)
  const key = q.query.key
  const email = q.query.email
  console.log("email = " + email + "\n key = " + key)
  var flag = true
  DeleteUser.find({ email: email }, { _id: 0 })
    .then((ress) => {
      if (ress.length > 0 && ress[0].key != key) {
        flag = false
      }
    })
    .catch((err) => {
      console.log(err)
      alert(err)
      flag = false
    })
  console.log("made it here")

  User.deleteOne({ email: email })
    .then((ress) => {
      DeleteUser.deleteOne({ email: email }).then(() => {
        res.sendFile(
          "D:\web-project-master\backend\Success.html"
        )
      })

      console.log("done")
    })
    .catch((err) => {
      console.log(err)
      alert(err)
      flag = false
    })
  if (!flag)
    res.sendFile(
      "D:\web-project-master\backend\Failure.html"
    )
})
app.post("/verify/refresh/", (req, res) => {
  if (req.body.token) {
    Refresh.find({ token: req.body.token }, { _id: 0 })
      .then((tokens) => {
        if (tokens.length > 0) res.json({ logged: true })
        else res.json({ logged: false })
      })
      .catch(() => res.sendStatus(500))
  } else res.json({ logged: false })
})
app.get("/", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err))
})
app.post("/token", (req, res) => {
  const refreshToken = req.body.token
  if (refreshToken == null) return res.sendStatus(401)
  Refresh.find({ token: refreshToken }, { _id: 0 })
    .then(
      jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, user) => {
          if (err) return res.sendStatus(403)
          const accessToken = generateAccessToken({ email: user.email })
          res.json({ accessToken: accessToken })
        }
      )
    )
    .catch(() => {
      return res.sendStatus(400)
    })
})
app.post("/login", async (req, res) => {
  const email = req.body.email
  console.log("email : " + email)
  console.log("password : " + req.body.password)
  await User.find({ email: email }, { password: 1, _id: 0 })
    .then(async (passwordRaw) => {
      var flag = true
      if (passwordRaw.length == 0) {
        flag = false
        res.json({ isAllowed: false })
      }
      console.log("passwordRaw : " + passwordRaw)
      if (flag) {
        const hashedPassword = passwordRaw[0].password
        const requestedPassword = req.body.password
        try {
          if (await bcrypt.compare(requestedPassword, hashedPassword)) {
            console.log("in if")
            const user = { email: email }

            const accessToken = jwt.sign(
              user,
              process.env.ACCESS_TOKEN_SECRET,
              {
                expiresIn: "10m",
              }
            )

            const refreshToken = jwt.sign(
              user,
              process.env.REFRESH_TOKEN_SECRET
            )
            const newRefreshToken = new Refresh({ token: refreshToken })
            newRefreshToken
              .save()
              .then(() => {
                console.log("allowed")
                res.json({
                  accessToken: accessToken,
                  refreshToken: refreshToken,
                  isAllowed: true,
                })
              })
              .catch((err) => {
                console.log("error")
                res.status(400).json("Error: " + err)
              })
          } else {
            console.log("not allowed / in else")
            res.json({ isAllowed: false })
          }
        } catch (err) {
          console.log(err)
          res.sendStatus(500)
        }
      }
    })
    .catch((err) => {
      console.log("not found " + err)
      res.json({ isAllowed: false })
    })
})

app.post("/signup", async (req, res) => {
  const email = req.body.email
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const password = req.body.password
  const phone = req.body.phone
  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: hashedPassword,
      phone: phone,
    })

    await newUser
      .save()
      .then(async () => {
        var id = crypto.randomBytes(20).toString("hex")
        const newDeleteUser = new DeleteUser({ email: email, delKey: id })
        await newDeleteUser
          .save()
          .then(() => {
            var mailOptions = {
              from: nodemail,
              to: email,
              subject: "Welcome to Hotel Atlantis!",
              html:
                "<div style='font-size:20px'>Account has been created!.<br/>To delete the account(<b style='color:red;'>irreversible</b>)  , click this <a href='http://localhost:4000/users/delete/email/?email=" +
                email +
                "&key=" +
                id +
                "'>link</a>.</div>",
            }
            transporter.sendMail(mailOptions, function (error, info) {
              if (error) {
                console.log(error)
              } else {
                console.log("Email sent: " + info.response)
              }
            })
            res.json({ done: 1 })
          })
          .catch(() => {
            console.log("here")
            res.sendStatus(500)
          })
      })
      .catch((err) => {
        res.json({ ...err.keyPattern, done: 0 })
      })
  } catch {
    console.log("there")
    res.sendStatus(500)
  }
})
app.delete("/logout", (req, res) => {
  if (req.body.token) {
    tokens = Refresh.find({ token: req.body.token }, { _id: 0 })
    if (tokens) {
      Refresh.remove({ token: req.body.token })
        .then(() => res.json("Logged Out"))
        .catch(() => res.json("ERROR"))
    }
    res.status(403).json("Not Logged in")
  }
  res.status(400).json("Bad request")
})