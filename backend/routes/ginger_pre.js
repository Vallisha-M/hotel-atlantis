const router = require('express').Router()
let Ginger_pre = require('../models/ginger_pre.model');
const { uniqueid } = require('./users');

router.route('/').get((req, res) => {
  Ginger_pre.find()
    .then((ginger_pre) => res.json(ginger_pre))
    .catch((err) => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
  const checkin = Date.parse(req.body.checkin)
  const seats = req.body.seats
  const time = req.body.time
  const order = req.body.order
  const newGinger_pre = new Ginger_pre({
    uniqueid : uniqueid,
    checkin: checkin,
    seats: seats,
    time: time,
    order: order,
  });

  router.delete('/delete/:id' , async(req,res) => {
    await(Ginger_pre.deleteOne({"_id" : req.params.id}))
      .then(() => res.json("Preorder cancelled"))
      .catch(err => res.status(400).json('Error ' + err));
  });

  router.patch('/update/:id' , async(req,res) => {
    try{
      const ginger_pre = await(Ginger_pre.findById(req.params.id));
      ginger_pre.uniqueid = ginger_pre.uniqueid;
      ginger_pre.checkin = Date.parse(req.body.checkin) || ginger_pre.checkin;
      ginger_pre.seats = req.body.seats || ginger_pre.seats;
      ginger_pre.time = req.body.time || ginger_pre.time;
      ginger_pre.order = req.body.order || ginger_pre.order; 
      await(ginger_pre.save())
        .then(() => res.json('Order details updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    }
    catch(err){
      res.status(400).json('Error: ' + err);
    }
  });

  newGinger_pre.save()
    .then(() => res.json('Blue ginger pre ordered!'))
    .catch((err) => res.status(400).json('Error : ' + err))
})

module.exports = router
