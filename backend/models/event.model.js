const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema(
<<<<<<< HEAD
  {
    uniqueid : {
      type : String,
      required : true,
      unique : false
    },
    type: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minlength: 1,
    },
    performer: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minlength: 1,
    },
    date: {
      type: Date,
      unique: false,
      required: true,
    },
    time: {
      type: String,
      required: true,
      minlength: 11,
      maxlength: 11,
    },
  },
  {
    timestamps: true,
  }
)
const Event = mongoose.model('Event', eventSchema)
module.exports = Event
=======
	{
		type: {
			type: String,
			required: true,
			unique: false,
			trim: true,
			minlength: 1,
		},
		performer: {
			type: String,
			required: true,
			unique: false,
			trim: true,
			minlength: 1,
		},
		date: {
			type: String,
			unique: false,
			required: true,
		},
		time: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);
const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
>>>>>>> 3870144afadefd69750864ddc2e3b827cae6d3d8
