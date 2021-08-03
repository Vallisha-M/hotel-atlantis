require("dotenv").config();
const router = require("express").Router();
let Feedback = require("../models/feedback.model");
let Token = require("../models/token.model");
let User = require("../models/user.model");
const nodemailer = require("nodemailer");
const nodemail = process.env.EMAIL;
const nodePass = process.env.EMAIL_PASS;
const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: nodemail,
		pass: nodePass,
	},
});
router.route("/get").get(async (req, res) => {
	await Feedback.find({}, { _id: 0, star: 1, email: 1, describe: 1 })
		.sort({ star: -1 })
		.limit(5)
		.then(async (ress) => {
			var response = [];
			var flag = 0;
			const length = ress.length;
			await ress.map(async (obj, index) => {
				var newObject = { ...obj._doc, name: null };
				var name = null;

				await User.find(
					{ email: obj.email },
					{ firstName: 1, lastName: 1, _id: 0 }
				)
					.then((userResponse) => {
						name =
							userResponse[0].firstName +
							" " +
							userResponse[0].lastName;
					})
					.catch(() => {
						name = "";
					});
				delete newObject["email"];
				newObject.name = name;
				response.push(newObject);
				if (index == length - 1) res.json(response);
			});
		})
		.catch((err) => {
			console.log(err);
			res.json({ done: 0, error: 100 });
		});
});

router.route("/add").post(async (req, res) => {
	console.log("there");
	const email = req.body.email;
	const star = req.body.star;
	const describe = req.body.describe;
	var flag = true;
	var flag1 = false;
	const token = req.body.token;

	await Token.find({ email: email }, { _id: 0 }).then((ress) => {
		if (ress[0] != undefined && ress[0].token == token) {
			flag1 = true;
		} else {
			console.log("here");
			res.json({ done: 0 });
		}
	});

	if (flag1) {
		const newFeedback = new Feedback({
			email: email,
			star: star,
			describe: describe,
		});
		await Feedback.deleteOne({ email: email })
			.then(async () => {
				console.log("here");
				newFeedback
					.save()
					.then(() => {
						var mailOptions = {
							from: nodemail,
							to: email,
							subject: "Hotel Atlantis - Feedback",
							html:
								"<div style='font-size:20px'>Thank you for rating us " +
								star +
								" stars. Your feedback will help us serve you better next time. <br/><br/></div>Thank you,<br/>Hotel Atlantis",
						};
						transporter.sendMail(
							mailOptions,
							function (error, info) {
								if (error) {
									console.log(error);
								} else {
									console.log("Email sent: " + info.response);
								}
								res.json({ done: 1 });
							}
						);
					})
					.catch((err) => {
						console.log(err);
						res.json({ error: 1, done: 0 });
					});
			})
			.catch((err) => {
				console.log(err);
				res.json({ error: 1, done: 0 });
			});
	}
});
module.exports = router;
