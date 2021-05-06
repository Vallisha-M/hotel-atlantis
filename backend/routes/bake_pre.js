const router = require('express').Router();
let Bake_pre = require('../models/bake.model');

router.route('/show').get((req, res) => {
  Bake_pre.find()
    .then((bake_pre) => res.json(bake_pre))
    .catch((err) => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
  const uniqueid = require('./users').uniqueid;
  const checkin = Date.parse(req.body.checkin);
  const seats = req.body.seats;
  const time = req.body.time;
  const order = req.body.order;
  const newBake_pre = new Bake_pre({
    uniqueid : uniqueid,
    checkin: checkin,
    seats: seats,
    time: time,
    order: order
  });

  router.delete('/delete/:id' , async(req,res) => {
    await(Bake_pre.deleteOne({"_id" : req.params.id}))
      .then(() => res.json("Preorder cancelled"))
      .catch(err => res.status(400).json('Error ' + err));
  });

  router.patch('/update/:id' , async(req,res) => {
    try{
      const bake_pre = await(Bake_pre.findById(req.params.id));
      bake_pre.uniqueid = bake_pre.uniqueid;
      bake_pre.checkin = Date.parse(req.body.checkin) || bake_pre.checkin;
      bake_pre.seats = req.body.seats || bake_pre.seats;
      bake_pre.time = req.body.time || bake_pre.time;
      bake_pre.order = req.body.order || bake_pre.order; 
      await(bake_pre.save())
        .then(() => res.json('Order details updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    }
    catch(err){
      res.status(400).json('Error: ' + err);;
    }
  });

  newBake_pre.save()
    .then(() => res.json('Bake Love pre ordered!'))
    .catch((err) => res.status(400).json('Error : ' + err));
})

module.exports = router;
