const router = require('express').Router()
let Ginger = require('../models/ginger.model')

router.route('/').get((req, res) => {
  Ginger.find()
    .then((ginger) => res.json(ginger))
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const uniqueid = req.cookies['uniqueid'];
  const checkin = Date.parse(req.body.checkin)
  const seats = req.body.seats
  const time = req.body.time
  const newGinger = new Ginger({
    uniqueid : uniqueid,
    checkin: checkin,
    seats: seats,
    time: time,
  })

  router.delete('/delete/:id' , async(req,res) => {
    await(Ginger.deleteOne({"_id" : req.params.id}))
      .then(() => res.json("Reservation cancelled"))
      .catch(err => res.status(400).json('Error ' + err));
  });

  router.patch('/update/:id' , async(req,res) => {
    try{
      const ginger = await(Ginger.findById(req.params.id));
      ginger.uniqueid = ginger.uniqueid;
      ginger.checkin = Date.parse(req.body.checkin) || ginger.checkin;
      ginger.seats = req.body.seats || ginger.seats;
      ginger.time = req.body.time || ginger.time;
      ginger.order = req.body.order || ginger.order; 
      await(bake.save())
        .then(() => res.json('Reservation details updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    }
    catch(err){
      res.status(400).json('Error: ' + err);
    }
  });

  newGinger
    .save()
    .then(() => res.json('Blue ginger reserved!'))
    .catch((err) => res.status(400).json('Error : ' + err))
})

module.exports = router
