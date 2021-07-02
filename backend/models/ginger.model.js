const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GingerSchema = new Schema(
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
)
const Ginger = mongoose.model('Ginger', GingerSchema)
module.exports = Ginger
