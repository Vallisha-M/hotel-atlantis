const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GingerSchema = new Schema(
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
<<<<<<< HEAD
      minlength: 11,
      maxlength: 11,
=======
      minlength: 9,
      maxlength: 9,
>>>>>>> e8b0b781f8b090341cce6576ca20f0c4ce16bf8a
    },
  },
  {
    timestamps: true,
  }
)
const Ginger = mongoose.model('Ginger', GingerSchema)
module.exports = Ginger
