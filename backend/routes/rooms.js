<<<<<<< HEAD
const router = require('express').Router();
let Rooms = require('../models/rooms.model');

<<<<<<< HEAD
// GET
router.route('/show').get(async(req, res) => {
    await(Rooms.find())
=======
router.route('/').get((req, res) => {
    Rooms.find()
>>>>>>> e8b0b781f8b090341cce6576ca20f0c4ce16bf8a
      .then(rooms => res.json(rooms))
      .catch(err => res.status(400).json('Error: ' + err));
});

<<<<<<< HEAD
// GET a specific collection
router.route('/show/:id').get(async(req,res) => {
    await(Rooms.findById(req.params.id))
      .then(rooms => res.json(rooms))
      .catch(err => res.status(400).json('Error: ' + err));
});


// UPDATE
router.patch('/update/:id' , async(req,res) => {
    try{
      const room = await(Rooms.findById(req.params.id));
      room.uniqueid = room.uniqueid;
      room.checkindate = Date.parse(req.body.checkindate) || room.checkindate;
      room.checkoutdate = Date.parse(req.body.checkoutdate) || room.checkoutdate;
      room.roomtype = req.body.roomtype || room.roomtype;
      room.numberofpeople = Number( req.body.numberofpeople) || room.numberofpeople;
      await(room.save())
        .then(() => res.json('Room details updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    }
    catch(err){
      res.status(400).json('Error: ' + err);
    }
});

//DELETE
router.delete('/delete/:id' , async(req,res) => {
    await(Rooms.deleteOne({"_id" : req.params.id}))
      .then(() => res.json("Room booking cancelled"))
      .catch(err => res.status(400).json('Error ' + err));
});

// POST
router.route('/add').post((req, res) => {
    const uniqueid = req.cookies['uniqueid'];
=======
router.route('/add').post((req, res) => {
>>>>>>> e8b0b781f8b090341cce6576ca20f0c4ce16bf8a
    const checkindate = Date.parse(req.body.checkindate);
    const checkoutdate = Date.parse(req.body.checkoutdate);
    const roomtype = req.body.roomtype;
    const numberofpeople = Number(req.body.numberofpeople);

    const newRoom = new Rooms({
<<<<<<< HEAD
      uniqueid : uniqueid,
=======
>>>>>>> e8b0b781f8b090341cce6576ca20f0c4ce16bf8a
      checkindate : checkindate, 
      checkoutdate : checkoutdate,
      roomtype : roomtype,
      numberofpeople : numberofpeople,
<<<<<<< HEAD
      bookedflag : false
    });

  newRoom.save()
    .then(() => res.json('Room Booked!'))
    .catch(err => res.status(400).json('Error: ' + err));
=======
    });

    newRoom.save()
    .then(() => res.json('Room Booked!'))
    .catch(err => res.status(400).json('Error: '+err));
>>>>>>> e8b0b781f8b090341cce6576ca20f0c4ce16bf8a
});

module.exports = router;
=======
const router = require("express").Router()
let Rooms = require("../models/rooms.model")

// GET
router.route("/show").get(async (req, res) => {
  var checkindate = req.query.checkindate
  var checkoutdate = req.query.checkoutdate
  var roomtype = req.query.roomtype
  await Rooms.find({
    roomtype: roomtype,
    checkindate: { $lte: checkindate },
    checkoutdate: { $gte: checkoutdate },
  })
    .then((rooms) => {
      res.json(rooms)
      //console.log(rooms);
    })
    .catch((err) => res.status(400).json("Error: " + err))
})

router.route("/show_email").get(async (req, res) => {
  var email = req.query.email
  await Rooms.find({
    email: email,
  })
    .then((rooms) => {
      res.json(rooms)
      //console.log(rooms);
    })
    .catch((err) => res.status(400).json("Error: " + err))
})

// GET a specific collection
router.route("/show/:id").get(async (req, res) => {
  await Rooms.findById(req.params.id)
    .then((rooms) => res.json(rooms))
    .catch((err) => res.status(400).json("Error: " + err))
})

// UPDATE
router.patch("/update/:id", async (req, res) => {
  try {
    const room = await Rooms.findById(req.params.id)
    room.uniqueid = room.uniqueid
    room.checkindate = Date.parse(req.body.checkindate) || room.checkindate
    room.checkoutdate = Date.parse(req.body.checkoutdate) || room.checkoutdate
    room.roomtype = req.body.roomtype || room.roomtype
    room.numberofpeople = Number(req.body.numberofpeople) || room.numberofpeople
    await room
      .save()
      .then(() => res.json("Room details updated"))
      .catch((err) => res.status(400).json("Error: " + err))
  } catch (err) {
    res.status(400).json("Error: " + err)
  }
})

//DELETE
router.delete("/delete/:id", async (req, res) => {
  await Rooms.deleteOne({ _id: req.params.id })
    .then(() => res.json("Room booking cancelled"))
    .catch((err) => res.status(400).json("Error " + err))
})

// POST
router.route("/add").post((req, res) => {
  const checkindate = Date.parse(req.body.checkindate)
  const checkoutdate = Date.parse(req.body.checkoutdate)
  const roomtype = req.body.roomtype
  const numberofpeople = Number(req.body.numberofpeople)

  const newRoom = new Rooms({
    checkindate: checkindate,
    checkoutdate: checkoutdate,
    roomtype: roomtype,
    numberofpeople: numberofpeople,
  })

  newRoom
    .save()
    .then(() => res.json("Room Booked!"))
    .catch((err) => res.status(400).json("Error: " + err))
})

module.exports = router
>>>>>>> 9464ea84e7f618e96f2503b63cf7747bb56c5601
