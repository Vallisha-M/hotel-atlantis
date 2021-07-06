const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Indian_preSchema = new Schema(
	{
		checkin: {
			type: String,
			required: true,
			unique: false,
		},
		seats: {
			type: String,
			required: true,
			unique: false,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: false,
			trim: true,
			minlength: 5,
		},
		time: {
			type: String,
			required: true,
			minlength: 0,
		},
		order: {
			type: Object,
		},
	},
	{
		timestamps: true,
	}
);
const Indian_pre = mongoose.model("Indian_pre", Indian_preSchema);
module.exports = Indian_pre;
