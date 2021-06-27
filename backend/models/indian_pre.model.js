const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Indian_preSchema = new Schema(
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
    order: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
)
const Indian_pre = mongoose.model('Indian_pre', Indian_preSchema)
module.exports = Indian_pre
