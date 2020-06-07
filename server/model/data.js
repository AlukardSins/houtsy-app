const mongoose = require('mongoose')
const Schema = mongoose.Schema

var Data = new Schema(
  {
    serviceId: {
      type: String,
      required: true
    },
    userId: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    dateTime: {
      type: Date,
      required: true
    },
    data: {
      type: String,
      required: true
    }
  },
  {
    collection: 'data'
  }
)

module.exports = mongoose.model('Data', Data)
