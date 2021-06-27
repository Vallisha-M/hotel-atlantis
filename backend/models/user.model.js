<<<<<<< HEAD
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema( {
    email : {
        type: String,
        required:true,
        unique:true,
        trim: true,
        minlength:5
    },
    firstName : {
        type: String,
        required:true,
        unique:false,
        trim: true,
        minlength:1
    },
    lastName : {
        type: String,
        required:true,
        unique:false,
        trim: true,
        minlength:1
    },
    password: {
        type:String,
        required:true,
        unique:false
    }
},   {
    timestamps : true,
});
const User = mongoose.model('User', userSchema);
module.exports = User;
=======
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 5,
    },
    firstName: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minlength: 1,
    },
    lastName: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minlength: 1,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
      minlength: 10,
      maxlength: 10,
    },
    password: {
      type: String,
      required: true,
      unique: false,
    },
  },
  {
    timestamps: true,
  }
)
const User = mongoose.model('User', userSchema)
module.exports = User
>>>>>>> e8b0b781f8b090341cce6576ca20f0c4ce16bf8a
