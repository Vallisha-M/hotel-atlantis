require('dotenv').config()
const cors = require('cors')
const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
let User = require('./models/user.model')
const mongoose = require('mongoose')
let Refresh = require('./models/refresh_token.model')
const app = express()

app.use(express.json())
const port = process.env.PORT || 4000
const uri = process.env.ATLAS_URI
app.use(cors({ origin: 'http://localhost:3000' }))
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
})
app.post('/verify/refresh/', (req, res) => {
  if (req.body.token) {
    Refresh.find({ token: req.body.token }, { _id: 0 })
      .then((tokens) => {
        if (tokens.length > 0) res.json({ logged: true })
        else res.json({ logged: false })
      })
      .catch(() => res.sendStatus(500))
  } else res.json({ logged: false })
})
app.get('/', (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err))
})
app.post('/token', (req, res) => {
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
app.post('/login', (req, res) => {
  const email = req.body.email

  User.find({ email: email }, { password: 1, _id: 0 })
    .then(async (passwordRaw) => {
      const hashedPassword = passwordRaw[0].password
      const requestedPassword = req.body.password
      try {
        const isAllowed = await bcrypt.compare(
          requestedPassword,
          hashedPassword
        )
        if (isAllowed) {
          const user = { email: email }

          const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '10m',
          })

          const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
          const newRefreshToken = new Refresh({ token: refreshToken })
          newRefreshToken
            .save()
            .then(() =>
              res.json({
                accessToken: accessToken,
                refreshToken: refreshToken,
                isAllowed: true,
              })
            )
            .catch((err) => {
              console.log('error')
              res.status(400).json('Error: ' + err)
            })
        } else {
          console.log('not')
          res.json({ isAllowed: false })
        }
      } catch {
        console.log(500)
        res.sendStatus(500)
      }
    })
    .catch((err) => {
      console.log('err')
      res.json({ isAllowed: false })
    })
})

app.post('/signup', async (req, res) => {
  const email = req.body.email
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const password = req.body.password
  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: hashedPassword,
    })

    newUser
      .save()
      .then(() => res.json('User added!'))
      .catch((err) => res.status(400).json('Error: ' + err))
  } catch {
    res.sendStatus(500)
  }
})
app.delete('/logout', (req, res) => {
  if (req.body.token) {
    tokens = Refresh.find({ token: req.body.token }, { _id: 0 })
    if (tokens) {
      Refresh.remove({ token: req.body.token })
        .then(() => res.json('Logged Out'))
        .catch(() => res.json('ERROR'))
    }
    res.status(403).json('Not Logged in')
  }
  res.status(400).json('Bad request')
})
app.listen(port, () => {
  console.log(`Authorization Server is running on port: ${port}`)
})