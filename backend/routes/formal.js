const router = require('express').Router()
let Formal = require('../models/formal.model')

router.route('/').get((req, res) => {
  Formal.find()
    .then((formal) => res.json(formal))
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/add').post(async (req, res) => {
  const email = req.body.email
  const guests = req.body.guests
  const date = req.body.date

  await Formal.find().then((ress) => {
    for (var i = 0; i < ress.length; i = i + 1) {
      var gotDate = ress[i].date.slice(0, 10)
      var reqDate = date.slice(0, 10)
      console.log('got : ' + ress[i].date)
      console.log('req : ' + reqDate)
      if (gotDate == reqDate) return res.json({ done: 0, duplicate: 1 })
    }
  })
  const newFormal = new Formal({
    email: email,
    guests: guests,
    date: date,
  })

  newFormal
    .save()
    .then(() => res.json({ done: 1 }))
    .catch((err) => {
      console.log(err)
      res.json({ ...err.keyPattern, done: 0 })
    })
})

module.exports = router
