const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema(
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
