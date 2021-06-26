const mongoose = require('mongoose')
const Schema = mongoose.Schema

const deleteUserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 5,
    },
    delKey: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
    },
  },
  {
    timestamps: true,
  }
)
const DeleteUser = mongoose.model('DeleteUser', deleteUserSchema)
module.exports = DeleteUser
