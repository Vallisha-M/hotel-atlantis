require("dotenv").config()
const router = require("express").Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
let User = require("../models/user.model")
router.route("/show").get(async (req, res) => {
  console.log("here")
  var email = req.query.email
  await User.find({ email: email })
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err))
})
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err))
})

module.exports = router
