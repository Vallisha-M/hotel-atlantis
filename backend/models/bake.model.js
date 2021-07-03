const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bakeSchema = new Schema(
<<<<<<< HEAD
  {
    uniqueid : {
      type : String,
      required : true,
      unique : false
    },
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
  },
  {
    timestamps: true,
  }
)
const Bake = mongoose.model('Bake', bakeSchema)
module.exports = Bake
=======
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
	},
	{
		timestamps: true,
	}
);
const Bake = mongoose.model("Bake", bakeSchema);
module.exports = Bake;
>>>>>>> 3870144afadefd69750864ddc2e3b827cae6d3d8
