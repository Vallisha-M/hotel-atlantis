
const router = require('express').Router();
let Informal = require('../models/informal.model');

router.route('/').get((req, res) => {
  Informal.find()
    .then(informal => res.json(informal))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const uniqueid = require('./users').uniqueid;
  const venue = req.body.venue;
  const adjective = req.body.adjective;
  const describe = req.body.describe;
  const guests = req.body.guests;  
  const services = req.body.services;
  const date = Date.parse(req.body.date);
  const newInformal = new Informal({
    uniqueid : uniqueid,
    venue:venue,
    adjective:adjective,
    describe:describe,
    guests:guests,
    services:services,
    date:date
  });

  router.delete('/delete/:id' , async(req,res) => {
    await(Informal.deleteOne({"_id" : req.params.id}))
    .then(() => res.json("Informal event cancelled"))
    .catch(err => res.status(400).json('Error ' + err));
})

router.patch('/update/:id' , async(req,res) => {
    try{
      const informal = Informal.findById({"_id" : req.params.id});
      informal.uniqueid = informal.uniqueid;
      informal.venue = req.body.venue || informal.venue;
      informal.adjective = req.body.adjective || informal.adjective;
      informal.describe = req.body.describe || informal.describe;
      informal.guests = req.body.guests || informal.guests;
      informal.services = req.body.services || informal.services;
      informal.date = req.body.date || informal.date;
      await(informal.save())
        .then(() => res.json('Event details updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    }
    catch(err){
      res.status(400).json('Error: ' + err);
    }
})

  newInformal.save()
    .then(() => res.json('Informal event added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;