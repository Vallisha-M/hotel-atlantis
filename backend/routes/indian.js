const router = require("express").Router();
let Indian = require("../models/indian.model");

router.route("/").get((req, res) => {
	Indian.find()
		.then((indian) => res.json(indian))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
	const checkin = Date.parse(req.body.checkin);
	const seats = req.body.seats;
	const time = req.body.time;
	const newIndian = new Indian({
		checkin: checkin,
		seats: seats,
		time: time,
	});

	newIndian
		.save()
		.then(() => res.json("Indian palace reserved!"))
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
