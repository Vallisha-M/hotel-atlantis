const mongoose = require("mongoose")
const Schema = mongoose.Schema

<<<<<<< HEAD
const roomSchema = new Schema({
<<<<<<< HEAD

    uniqueid : {
        type : String,
        unique : false,
        required : true
    },

=======
>>>>>>> e8b0b781f8b090341cce6576ca20f0c4ce16bf8a
    checkindate : {
        type : Date,
        unique : false,
        required : true
=======
const roomSchema = new Schema(
  {
    email: {
      type: String,
      unique: false,
      required: true,
>>>>>>> 9464ea84e7f618e96f2503b63cf7747bb56c5601
    },

    checkindate: {
      type: Date,
      unique: false,
      required: true,
    },

    checkoutdate: {
      type: Date,
      unique: false,
      required: true,
    },

    roomtype: {
      type: String,
      unique: false,
      required: true,
    },

<<<<<<< HEAD
<<<<<<< HEAD
    bookedflag : {
        type : Boolean,
        unique : false,
        required : true
    },

=======
>>>>>>> e8b0b781f8b090341cce6576ca20f0c4ce16bf8a
} ,  {
    timestamps : true,
});
=======
    numberofpeople: {
      type: Number,
      unique: false,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)
>>>>>>> 9464ea84e7f618e96f2503b63cf7747bb56c5601

const Rooms = mongoose.model("Rooms", roomSchema)
module.exports = Rooms
