const mongoose = require('mongoose')
const Schema = mongoose.Schema

var Data = new Schema(
  {
    serviceId:{
      type: String
  },
    userId:{
      type: String
  },
    type:{
      type: String
  },
    datetime:{
      type: date
  },
    data:{
      type: String
  },
  },
  {
    collection: 'data'
  }
)

module.exports = mongoose.model('Data', Data)
