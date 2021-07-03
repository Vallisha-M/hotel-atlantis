const router = require("express").Router();
let Ginger_pre = require("../models/ginger_pre.model");

router.route("/").get((req, res) => {
	Ginger_pre.find()
		.then((ginger_pre) => res.json(ginger_pre))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
	const checkin = Date.parse(req.body.checkin);
	const seats = req.body.seats;
	const time = req.body.time;
	const order = req.body.order;
	const newGinger_pre = new Ginger_pre({
		checkin: checkin,
		seats: seats,
		time: time,
		order: order,
	});

	newGinger_pre
		.save()
		.then(() => res.json("Blue ginger pre ordered!"))
		.catch((err) => res.status(400).json("Error : " + err));
});

module.exports = router;
