const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formalSchema = new Schema( {
    uniqueid : {
        type : String,
        required : true,
        unique : false
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
    date : {
        type:Date,
        unique : false,
        required : true
    }
},   {
    timestamps : true,
});
const Formal = mongoose.model('Formal', formalSchema);
module.exports = Formal;