const router = require('express').Router()
let Ginger = require('../models/ginger.model')

router.route('/').get((req, res) => {
  Ginger.find()
    .then((ginger) => res.json(ginger))
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
<<<<<<< HEAD
  const uniqueid = req.cookies['uniqueid'];
=======
>>>>>>> e8b0b781f8b090341cce6576ca20f0c4ce16bf8a
  const checkin = Date.parse(req.body.checkin)
  const seats = req.body.seats
  const time = req.body.time
  const newGinger = new Ginger({
<<<<<<< HEAD
    uniqueid : uniqueid,
=======
>>>>>>> e8b0b781f8b090341cce6576ca20f0c4ce16bf8a
    checkin: checkin,
    seats: seats,
    time: time,
  })

<<<<<<< HEAD
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

=======
>>>>>>> e8b0b781f8b090341cce6576ca20f0c4ce16bf8a
  newGinger
    .save()
    .then(() => res.json('Blue ginger reserved!'))
    .catch((err) => res.status(400).json('Error : ' + err))
})

module.exports = router
