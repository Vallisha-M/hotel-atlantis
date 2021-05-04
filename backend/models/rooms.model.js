const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
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

} ,  {
    timestamps : true,
});

const Rooms = mongoose.model('Rooms' , roomSchema);
module.exports = Rooms;