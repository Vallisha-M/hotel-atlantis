const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Ginger_preSchema = new Schema(
	{
		checkin: {
			type: Date,
			required: true,
			unique: false,
		},
		seats: {
			type: Number,
			required: true,
			unique: false,
			trim: true,
			minlength: 1,
		},
		time: {
			type: String,
			required: true,
			minlength: 9,
			maxlength: 9,
		},
		order: [Object],
	},
	{
		timestamps: true,
	}
);
const Ginger_pre = mongoose.model("Ginger_pre", Ginger_preSchema);
module.exports = Ginger_pre;
