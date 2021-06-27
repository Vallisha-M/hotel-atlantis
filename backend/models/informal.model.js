<<<<<<< HEAD
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const informalSchema = new Schema( {
    uniqueid : {
        type : String,
        required : true,
        unique : false
    },
    venue : {
        type: String,
        required:true,
        unique:false,
        trim: true,
    },
    adjective : {
        type: String,
        required:true,
        unique:false,
        trim: true,
    },
    describe : {
        type: String,
        required:true,
        unique:false,
        trim: true,
        minlength:1
    },
    guests: {
        type:String,
        required:true,
        unique:false,
        trim:true
    },
    services:{
        type:[String],
        required:true,
        unique:false,
        trim:true
    },
    date : {
        type:Date,
        unique : false,
        required : true
    }
},   {
    timestamps : true,
});
const Informal = mongoose.model('Informal', informalSchema);
module.exports = Informal;
=======
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const informalSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minlength: 5,
    },
    venue: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    adjective: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },

    guests: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },

    date: {
      type: String,
      unique: false,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)
const Informal = mongoose.model('Informal', informalSchema)
module.exports = Informal
>>>>>>> e8b0b781f8b090341cce6576ca20f0c4ce16bf8a
