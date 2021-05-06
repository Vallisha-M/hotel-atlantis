const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Indian_preSchema = new Schema(
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
