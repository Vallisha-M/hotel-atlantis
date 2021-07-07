const router = require("express").Router();
let Ginger = require("../models/ginger.model");

router.route("/add").post((req, res) => {
	const checkin = Date.parse(req.body.checkin);
	const seats = req.body.seats;
	const time = req.body.time;
	const newGinger = new Ginger({
		checkin: checkin,
		seats: seats,
		time: time,
	});

	newGinger
		.save()
		.then(() => res.json("Blue ginger reserved!"))
		.catch((err) => res.status(400).json("Error : " + err));
});

module.exports = router;
