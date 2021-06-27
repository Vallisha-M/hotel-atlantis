const router = require('express').Router()
let Indian = require('../models/indian.model')

router.route('/').get((req, res) => {
  Indian.find()
    .then((indian) => res.json(indian))
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
  const newIndian = new Indian({
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
    await(Indian.deleteOne({"_id" : req.params.id}))
      .then(() => res.json("Reservation cancelled"))
      .catch(err => res.status(400).json('Error ' + err));
  });

  router.patch('/update/:id' , async(req,res) => {
    try{
      const indian = await(Indian.findById(req.params.id));
      indian.uniqueid = indian.uniqueid;
      indian.checkin = Date.parse(req.body.checkin) || indian.checkin;
      indian.seats = req.body.seats || indian.seats;
      indian.time = req.body.time || indian.time;
      indian.order = req.body.order || indian.order; 
      await(indian.save())
        .then(() => res.json('Reservation details updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    }
    catch(err){
      res.status(400).json('Error: ' + err);
    }
  });

=======
>>>>>>> e8b0b781f8b090341cce6576ca20f0c4ce16bf8a
  newIndian
    .save()
    .then(() => res.json('Indian palace reserved!'))
    .catch((err) => res.status(400).json('Error: ' + err))
})

<<<<<<< HEAD
module.exports = router
=======
module.exports = router
>>>>>>> e8b0b781f8b090341cce6576ca20f0c4ce16bf8a
