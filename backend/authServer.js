require('dotenv').config()
const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
let User = require('./models/user.model')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())
const port = process.env.PORT || 4000
const uri = process.env.ATLAS_URI
let refreshTokens = []
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
})
app.get('/', (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err))
})
app.post('/login', (req, res) => {
  const email = req.body.email
  User.find({ email: email }, { password: 1, _id: 0 })
    .then(async (passwordRaw) => {
      const hashedPassword = passwordRaw[0].password
      const requestedPassword = req.body.password
      try {
        isAllowed = await bcrypt.compare(requestedPassword, hashedPassword)
        if (isAllowed) res.send('Allowed')
        else res.send('Not Allowed')
      } catch {
        res.sendStatus(500)
      }
    })
    .catch((err) => res.status(400).json('User not found'))
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

app.listen(port, () => {
  console.log(`Authorization Server is running on port: ${port}`)
})
