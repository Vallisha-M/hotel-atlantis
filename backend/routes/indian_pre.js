const router = require("express").Router();
let Indian_pre = require("../models/indian_pre.model");

router.route("/").get((req, res) => {
	Indian_pre.find()
		.then((indian_pre) => res.json(indian_pre))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
	const checkin = Date.parse(req.body.checkin);
	const seats = req.body.seats;
	const time = req.body.time;
	const order = req.body.order;
	const newIndian_pre = new Indian_pre({
		checkin: checkin,
		seats: seats,
		time: time,
		order: order,
	});

	newIndian_pre
		.save()
		.then(() => res.json("Indian palace pre ordered!"))
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
