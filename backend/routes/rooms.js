const router = require('express').Router();
let Rooms = require('../models/rooms.model');

router.route('/show').get((req, res) => {
  Rooms.find()
    .then(rooms => res.json(rooms))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const checkindate = Date.parse(req.body.checkindate);
    const checkoutdate = Date.parse(req.body.checkoutdate);
    const roomtype = req.body.roomtype;
    const numberofpeople = Number(req.body.numberofpeople);

    const newRoom = new Rooms({
      checkindate : checkindate, 
      checkoutdate : checkoutdate,
      roomtype : roomtype,
      numberofpeople : numberofpeople,
    });

    newRoom.save()
      .then(() => res.sendFile('C:\\Personal\\Semester-4\\ProjectWork2\\HotelAtlantis\\confirm.html'))
      .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;