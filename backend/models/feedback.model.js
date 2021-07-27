const mongoose = require("mongoose")
const Schema = mongoose.Schema

const feedbackSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    describe: {
      type: String,
      required: false,
      unique: false,
      trim: true,
    },
    star: {
      type: String,
      unique: false,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)
const Feedback = mongoose.model("Feedback", feedbackSchema)
module.exports = Feedback
