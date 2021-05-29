const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5500

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
})

const usersRouter = require('./routes/users')

const formalRouter = require('./routes/formal')
const informalRouter = require('./routes/informal')

const event = require('./routes/event')

const bake = require('./routes/bake')
const indian = require('./routes/indian')
const ginger = require('./routes/ginger')

const bake_pre = require('./routes/bake_pre')
const indian_pre = require('./routes/indian_pre')
const ginger_pre = require('./routes/ginger_pre')

const standard = require('./routes/informal')
const deluxe = require('./routes/informal')
const suite = require('./routes/informal')

app.use('/formal', formalRouter)
app.use('/informal', informalRouter)
app.use('/event', event)
app.use('/bake', bake)
app.use('/indian', indian)
app.use('/ginger', ginger)

app.use('/bake_pre', bake_pre)
app.use('/indian_pre', indian_pre)
app.use('/ginger_pre', ginger_pre)
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
