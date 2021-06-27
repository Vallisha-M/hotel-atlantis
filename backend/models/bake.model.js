const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bakeSchema = new Schema(
  {
<<<<<<< HEAD
    uniqueid : {
      type : String,
      required : true,
      unique : false
    },
=======
>>>>>>> e8b0b781f8b090341cce6576ca20f0c4ce16bf8a
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
