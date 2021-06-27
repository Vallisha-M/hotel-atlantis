const router = require("express").Router()
let Formal = require("../models/formal.model")

router.route("/").get((req, res) => {
  Formal.find()
    .then((formal) => res.json(formal))
    .catch((err) => res.status(400).json("Error: " + err))
})
router.delete("/delete/", async (req, res) => {
  await Formal.remove({ email: req.body.email }, false)
    .then(() => res.json({ done: 1 }))
    .catch((err) => res.json({ done: 0 }))
})
router.route("/add").post(async (req, res) => {
  const email = req.body.email
  const guests = req.body.guests
  const date = req.body.date
  var flag = true
  await Formal.find({ date: date }).then((ress) => {
    if (ress.length > 0) {
      flag = false
      return res.json({ done: 0, duplicate: 1 })
    }
  })
  if (flag) {
    const newFormal = new Formal({
      email: email,
      guests: guests,
      date: date,
    })

    newFormal
      .save()
      .then(() => res.json({ done: 1 }))
      .catch((err) => {
        console.log(err)
        res.json({ error: 1, done: 0 })
      })
  }
})

module.exports = router
