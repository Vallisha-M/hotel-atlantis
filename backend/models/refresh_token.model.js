const mongoose = require('mongoose')
const Schema = mongoose.Schema

const refreshSchema = new Schema(
  {
    token: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
)
const Refresh = mongoose.model('Refresh', refreshSchema)
module.exports = Refresh
