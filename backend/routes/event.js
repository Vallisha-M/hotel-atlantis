const router = require("express").Router();
let Event = require("../models/event.model");

router.route("/show").get((req, res) => {
	Event.find()
		.then((event) => res.json(event))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
	const uniqueid = req.cookies["uniqueid"];
	const type = req.body.type;
	const performer = req.body.performer;
	const date = Date.parse(req.body.date);
	const time = req.body.time;
	const newEvent = new Formal({
		uniqueid: uniqueid,
		type: type,
		performer: performer,
		date: date,
		time: time,
	});

	router.delete("/delete/:id", async (req, res) => {
		await Event.deleteOne({ _id: req.params.id })
			.then(() => res.json("Event cancelled"))
			.catch((err) => res.status(400).json("Error " + err));
	});

	router.patch("/update/:id", async (req, res) => {
		try {
			const event = Event.findById({ _id: req.params.id });
			event.uniqueid = event.uniqueid;
			event.type = req.body.type || event.type;
			event.performer = req.body.performer || event.performer;
			event.date = req.body.date || event.date;
			event.time = req.body.time || event.time;
			await event
				.save()
				.then(() => res.json("Event details updated"))
				.catch((err) => res.status(400).json("Error: " + err));
		} catch (err) {
			res.status(400).json("Error: " + err);
		}
	});

	newEvent
		.save()
		.then(() => res.json("Event added!"))
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
