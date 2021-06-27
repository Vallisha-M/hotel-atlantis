const router = require('express').Router()
let Bake = require('../models/bake.model')

router.route('/').get((req, res) => {
  Bake.find()
    .then((bake) => res.json(bake))
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
  const newBake = new Bake({
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
    await(Bake.deleteOne({"_id" : req.params.id}))
      .then(() => res.json("Reservation cancelled"))
      .catch(err => res.status(400).json('Error ' + err));
  });

  router.patch('/update/:id' , async(req,res) => {
    try{
      const bake = await(Bake.findById(req.params.id));
      bake.uniqueid = bake.uniqueid;
      bake.checkin = Date.parse(req.body.checkin) || bake.checkin;
      bake.seats = req.body.seats || bake.seats;
      bake.time = req.body.time || bake.time;
      bake.order = req.body.order || bake.order; 
      await(bake.save())
        .then(() => res.json('Reservation details updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    }
    catch(err){
      res.status(400).json('Error: ' + err);
    }
  });

  newBake.save()
=======
  newBake
    .save()
>>>>>>> e8b0b781f8b090341cce6576ca20f0c4ce16bf8a
    .then(() => res.json('Bake Love reserved!'))
    .catch((err) => res.status(400).json('Error : ' + err))
})

module.exports = router
