const router = require('express').Router()
let Indian_pre = require('../models/indian_pre.model')

router.route('/').get((req, res) => {
  Indian_pre.find()
    .then((indian_pre) => res.json(indian_pre))
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const uniqueid = req.cookies['uniqueid'];
  const checkin = Date.parse(req.body.checkin)
  const seats = req.body.seats
  const time = req.body.time
  const order = req.body.order
  const newIndian_pre = new Indian_pre({
    uniqueid : uniqueid,
    checkin: checkin,
    seats: seats,
    time: time,
    order: order,
  });

  router.delete('/delete/:id' , async(req,res) => {
    await(Indian_pre.deleteOne({"_id" : req.params.id}))
      .then(() => res.json("Preorder cancelled"))
      .catch(err => res.status(400).json('Error ' + err));
  });

  router.patch('/update/:id' , async(req,res) => {
    try{
      const indian_pre = await(Indian_pre.findById(req.params.id));
      indian_pre.uniqueid = indian_pre.uniqueid;
      indian_pre.checkin = Date.parse(req.body.checkin) || indian_pre.checkin;
      indian_pre.seats = req.body.seats || indian_pre.seats;
      indian_pre.time = req.body.time || indian_pre.time;
      indian_pre.order = req.body.order || indian_pre.order; 
      await(indian_pre.save())
        .then(() => res.json('Order details updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    }
    catch(err){
      res.status(400).json('Error: ' + err);;
    }
  });

  newIndian_pre
    .save()
    .then(() => res.json('Indian palace pre ordered!'))
    .catch((err) => res.status(400).json('Error: ' + err))
})

module.exports = router
