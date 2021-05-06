const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Bake_preSchema = new Schema(
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
const Bake_pre = mongoose.model('Bake', Bake_preSchema)
module.exports = Bake_pre
