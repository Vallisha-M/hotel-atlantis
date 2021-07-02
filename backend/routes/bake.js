const router = require('express').Router()
let Bake = require('../models/bake.model')

router.route('/').get((req, res) => {
  Bake.find()
    .then((bake) => res.json(bake))
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const checkin = Date.parse(req.body.checkin)
  const seats = req.body.seats
  const time = req.body.time
  const newBake = new Bake({
    checkin: checkin,
    seats: seats,
    time: time,
  })

  newBake
    .save()
    .then(() => res.json('Bake Love reserved!'))
    .catch((err) => res.status(400).json('Error : ' + err))
})

module.exports = router
