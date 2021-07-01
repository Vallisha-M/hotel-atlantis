const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formalSchema = new Schema(
	{
		email: {
			type: String,
			required: true,
			unique: false,
			trim: true,
		},
		guests: {
			type: String,
			required: true,
			unique: false,
			trim: true,
		},
		date: {
			type: String,
			unique: true,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);
const Formal = mongoose.model("Formal", formalSchema);
module.exports = Formal;
