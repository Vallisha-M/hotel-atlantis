const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema(
  {
<<<<<<< HEAD
    uniqueid : {
      type : String,
      required : true,
      unique : false
    },
=======
>>>>>>> e8b0b781f8b090341cce6576ca20f0c4ce16bf8a
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
<<<<<<< HEAD
      type: Date,
=======
      type: String,
>>>>>>> e8b0b781f8b090341cce6576ca20f0c4ce16bf8a
      unique: false,
      required: true,
    },
    time: {
      type: String,
      required: true,
<<<<<<< HEAD
      minlength: 11,
      maxlength: 11,
=======
>>>>>>> e8b0b781f8b090341cce6576ca20f0c4ce16bf8a
    },
  },
  {
    timestamps: true,
  }
)
const Event = mongoose.model('Event', eventSchema)
module.exports = Event
