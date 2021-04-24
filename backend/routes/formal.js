
const router = require('express').Router();
let Formal = require('../models/formal.model');

router.route('/').get((req, res) => {
  Formal.find()
    .then(formal => res.json(formal))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const describe = req.body.describe;
  const guests = req.body.guests;  
  const date = Date.parse(req.body.date);
  const newFormal = new Formal({
    describe:describe,
    guests:guests,
    date:date
  });

  newFormal.save()
    .then(() => res.json('Formal event added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;