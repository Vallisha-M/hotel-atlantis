<<<<<<< HEAD
const router = require('express').Router();
let User = require('../models/user.model');
const { json } = require('body-parser');
const cookieParser = require('cookie-parser');
const { route } = require('./rooms');

router.route('/show').get(async(req, res) => {
  await(User.find())
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(async(req, res) => {
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const password = req.body.password;  

  const newUser = new User({
    email : email, 
    firstName : firstName, 
    lastName : lastName, 
    password : password
});

  await(newUser.save())
    .then(() => {
      res.cookie('uniqueid',newUser.id,{maxAge : 9000000,httpOnly : true});
      res.json('User added');
    })
    .catch(err => {
      res.status(400).json('Error: ' + err);
    });
});

router.delete('/delete/:id' , async(req,res) => {
  await(User.deleteOne({"_id" : req.params.id}))
    .then(() => res.json("User details deleted!"))
    .catch(err => res.status(400).json('Error ' + err));
});

router.patch('/update/:id' , async(req,res) => {
  try{
    const user = await(User.findById(req.params.id));
    user.email = req.body.email || user.email;
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.password = req.body.password || user.password;
    await(user.save())
      .then(() => res.json("User details updated!"))
      .catch(err => res.status(400).json('Error: ' + err));
  }
  catch(err){
    res.status(400).json('Error: ' + err);
  }
});

module.exports = router;
=======
require('dotenv').config()
const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
let User = require('../models/user.model')

router.route('/').get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err))
})
router.route('/login').post((req, res) => {
  const email = req.body.email
  User.find({ email: email }, { password: 1, _id: 0 })
    .then(async (passwordRaw) => {
      const hashedPassword = passwordRaw[0].password
      const requestedPassword = req.body.password
      try {
        isAllowed = await bcrypt.compare(requestedPassword, hashedPassword)
        if (isAllowed) res.send('Allowed')
        else res.send('Not Allowed')
      } catch {
        res.sendStatus(500)
      }
    })
    .catch((err) => res.status(400).json('User not found'))
})
router.route('/signup').post(async (req, res) => {
  const email = req.body.email
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const password = req.body.password
  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: hashedPassword,
    })

    newUser
      .save()
      .then(() => res.json('User added!'))
      .catch((err) => res.status(400).json('Error: ' + err))
  } catch {
    res.sendStatus(500)
  }
})

module.exports = router
>>>>>>> e8b0b781f8b090341cce6576ca20f0c4ce16bf8a
