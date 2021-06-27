const router = require('express').Router()
let Event = require('../models/event.model')

<<<<<<< HEAD
router.route('/show').get((req, res) => {
  Event.find()
    .then((event) => res.json(event))
=======
router.route('/').get((req, res) => {
  Event.find()
    .then((event) => {
      res.json(event)
    })
>>>>>>> e8b0b781f8b090341cce6576ca20f0c4ce16bf8a
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
<<<<<<< HEAD
  const uniqueid = req.cookies['uniqueid'];
=======
>>>>>>> e8b0b781f8b090341cce6576ca20f0c4ce16bf8a
  const type = req.body.type
  const performer = req.body.performer
  const date = Date.parse(req.body.date)
  const time = req.body.time
<<<<<<< HEAD
  const newEvent = new Formal({
    uniqueid : uniqueid,
=======
  const newEvent = new Event({
>>>>>>> e8b0b781f8b090341cce6576ca20f0c4ce16bf8a
    type: type,
    performer: performer,
    date: date,
    time: time,
  })

<<<<<<< HEAD
  router.delete('/delete/:id' , async(req,res) => {
      await(Event.deleteOne({"_id" : req.params.id}))
      .then(() => res.json("Event cancelled"))
      .catch(err => res.status(400).json('Error ' + err));
  })

  router.patch('/update/:id' , async(req,res) => {
      try{
        const event = Event.findById({"_id" : req.params.id});
        event.uniqueid = event.uniqueid;
        event.type = req.body.type || event.type;
        event.performer = req.body.performer || event.performer;
        event.date = req.body.date || event.date;
        event.time = req.body.time || event.time;
        await(event.save())
          .then(() => res.json('Event details updated'))
          .catch(err => res.status(400).json('Error: ' + err));
      }
      catch(err){
        res.status(400).json('Error: ' + err);
      }
  })

  newEvent
    .save()
    .then(() => res.json('Event added!'))
=======
  newEvent
    .save()
    .then(() => res.json('Event event added!'))
>>>>>>> e8b0b781f8b090341cce6576ca20f0c4ce16bf8a
    .catch((err) => res.status(400).json('Error: ' + err))
})

module.exports = router
