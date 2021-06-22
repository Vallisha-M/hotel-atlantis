const router = require("express").Router();
let User = require("../models/user.model");
const { json } = require("body-parser");
const cookieParser = require("cookie-parser");
const { route } = require("./rooms");

router.route("/show").get(async (req, res) => {
	await User.find()
		.then((users) => res.json(users))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/signup").post(async (req, res) => {
	const email = req.body.email;
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const password = req.body.password;

	const newUser = new User({
		email: email,
		firstName: firstName,
		lastName: lastName,
		password: password,
	});

	await newUser
		.save()
		.then(() => {
			res.send({ uniqueid: newUser.id });
			res.json("User added");
		})
		.catch((err) => {
			res.status(400).json("Error: " + err);
		});
});

router.delete("/delete/:id", async (req, res) => {
	await User.deleteOne({ _id: req.params.id })
		.then(() => res.json("User details deleted!"))
		.catch((err) => res.status(400).json("Error " + err));
});

router.patch("/update/:id", async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		user.email = req.body.email || user.email;
		user.firstName = req.body.firstName || user.firstName;
		user.lastName = req.body.lastName || user.lastName;
		user.password = req.body.password || user.password;
		await user
			.save()
			.then(() => res.json("User details updated!"))
			.catch((err) => res.status(400).json("Error: " + err));
	} catch (err) {
		res.status(400).json("Error: " + err);
	}
});

module.exports = router;
