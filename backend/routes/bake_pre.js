const router = require("express").Router();
let Bake_pre = require("../models/bake.model");

router.route("/add").post((req, res) => {
	const checkin = Date.parse(req.body.checkin);
	const seats = req.body.seats;
	const time = req.body.time;
	const order = req.body.order;
	const newBake_pre = new Bake_pre({
		checkin: checkin,
		seats: seats,
		time: time,
		order: order,
	});

	newBake_pre
		.save()
		.then(() => res.json("Bake Love pre ordered!"))
		.catch((err) => res.status(400).json("Error : " + err));
});

module.exports = router;
