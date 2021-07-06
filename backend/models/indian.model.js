const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IndianSchema = new Schema(
	{
		checkin: {
			type: String,
			unique: false,
			required: true,
		},

		email: {
			type: String,
			required: true,
			unique: false,
			trim: true,
			minlength: 5,
		},
		seats: {
			type: String,
			required: true,
			unique: false,
			trim: true,
		},
		time: {
			type: String,
			required: true,
			minlength: 0,
		},
	},
	{
		timestamps: true,
	}
);
const Indian = mongoose.model("Indian", IndianSchema);
module.exports = Indian;
