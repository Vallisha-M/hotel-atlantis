
const router = require('express').Router();
let Informal = require('../models/informal.model');

router.route('/').get((req, res) => {
  Informal.find()
    .then(informal => res.json(informal))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const venue = req.body.venue;
  const adjective = req.body.adjective;
  const describe = req.body.describe;
  const guests = req.body.guests;  
  const services = req.body.services;
  const date = Date.parse(req.body.date);
  const newInformal = new Informal({
    venue:venue,
    adjective:adjective,
    describe:describe,
    guests:guests,
    services:services,
    date:date
  });

  newInformal.save()
    .then(() => res.json('Informal event added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;