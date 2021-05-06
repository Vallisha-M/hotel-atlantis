
const router = require('express').Router();
let Formal = require('../models/formal.model');

router.route('/').get((req, res) => {
  Formal.find()
    .then(formal => res.json(formal))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const uniqueid = req.cookies['uniqueid'];
  const describe = req.body.describe;
  const guests = req.body.guests;  
  const date = Date.parse(req.body.date);
  const newFormal = new Formal({
    uniqueid : uniqueid,
    describe:describe,
    guests:guests,
    date:date
  });

router.delete('/delete/:id' , async(req,res) => {
    await(Formal.deleteOne({"_id" : req.params.id}))
    .then(() => res.json("Formal event cancelled"))
    .catch(err => res.status(400).json('Error ' + err));
})

router.patch('/update/:id' , async(req,res) => {
    try{
      const formal = Formal.findById({"_id" : req.params.id});
      formal.uniqueid = formal.uniqueid;
      formal.describe  = req.body.describe || formal.describe;
      formal.guests = req.body.guests || formal.guests;
      formal.date = req.body.date || formal.date;
      await(formal.save())
        .then(() => res.json('Event details updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    }
    catch(err){
      res.status(400).json('Error: ' + err);
    }
})

  newFormal.save()
    .then(() => res.json('Formal event added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;