const router = require('express').Router()
let Event = require('../models/event.model')

router.route('/').get((req, res) => {
  Event.find()
    .then((event) => {
      res.json(event)
    })
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const type = req.body.type
  const performer = req.body.performer
  const date = Date.parse(req.body.date)
  const time = req.body.time
  const newEvent = new Event({
    type: type,
    performer: performer,
    date: date,
    time: time,
  })

  newEvent
    .save()
    .then(() => res.json('Event event added!'))
    .catch((err) => res.status(400).json('Error: ' + err))
})

module.exports = router
