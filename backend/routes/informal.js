const router = require('express').Router()
let Informal = require('../models/informal.model')

router.route('/').get((req, res) => {
  Informal.find()
    .then((informal) => res.json(informal))
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/add').post(async (req, res) => {
  const email = req.body.email
  const venue = req.body.venue
  const adjective = req.body.adjective
  const describe = req.body.describe
  const guests = req.body.guests
  const date = Date.parse(req.body.date)
  await Informal.find({ venue: venue }, { _id: 0 }).then((ress) => {
    for (var i = 0; i < ress.length; i = i + 1) {
      var gotDate = ress[i].date.toString().slice(0, 10)
      var reqDate = date.toString().slice(0, 10)
      if (gotDate == reqDate) return res.json({ done: 0, duplicate: 1 })
    }
  })
  const newInformal = new Informal({
    email: email,
    venue: venue,
    adjective: adjective,
    describe: describe,
    guests: guests,
    date: date,
  })

  await newInformal
    .save()
    .then(() => res.json({ done: 1 }))
    .catch((err) => {
      console.log(err)
      res.json({ done: 0, error: 1 })
    })
})

router.delete('/delete/', async (req, res) => {
  await Informal.deleteOne({ _id: req.query.id })
    .then(() => res.json('Informal event cancelled'))
    .catch((err) => res.status(400).json('Error ' + err))
})

router.patch('/update/', async (req, res) => {
  try {
    const informal = Informal.findById({ _id: req.query.id })
    informal.uniqueid = informal.uniqueid
    informal.venue = req.body.venue || informal.venue
    informal.adjective = req.body.adjective || informal.adjective
    informal.describe = req.body.describe || informal.describe
    informal.guests = req.body.guests || informal.guests
    informal.services = req.body.services || informal.services
    informal.date = req.body.date || informal.date
    await informal
      .save()
      .then(() => res.json('Event details updated'))
      .catch((err) => res.status(400).json('Error: ' + err))
  } catch (err) {
    res.status(400).json('Error: ' + err)
  }
})
module.exports = router
