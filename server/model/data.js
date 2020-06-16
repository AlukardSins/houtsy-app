const mongoose = require('mongoose')
const Schema = mongoose.Schema

var Data = new Schema(
  {
    userId: {
      type: String,
      required: true
    },
    sensorId: {
      type: String,
      required: true
    },
    aptId: {
      type: String
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
    },
    status: {
      type: Boolean,
      required: true
    }
  },
  {
    collection: 'data'
  }
)

module.exports = mongoose.model('Data', Data)
