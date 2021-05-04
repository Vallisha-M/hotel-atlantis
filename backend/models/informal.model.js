const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const informalSchema = new Schema( {
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