const mongoose = require("mongoose");
const Schema = mongoose.Schema;

<<<<<<< HEAD
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
=======
const formalSchema = new Schema(
	{
		email: {
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
			unique: true,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);
const Formal = mongoose.model("Formal", formalSchema);
module.exports = Formal;
>>>>>>> 3870144afadefd69750864ddc2e3b827cae6d3d8
