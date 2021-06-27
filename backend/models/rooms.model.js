const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    },

    checkoutdate : {
        type : Date,
        unique : false,
        required : true
    },

    roomtype : {
        type : String,
        unique : false,
        required : true
    },

    numberofpeople : {
        type : Number,
        unique : false,
        required : true
    },

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

const Rooms = mongoose.model('Rooms' , roomSchema);
module.exports = Rooms;