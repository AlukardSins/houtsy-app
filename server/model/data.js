const mongoose = require('mongoose')
const Schema = mongoose.Schema

var Data = new Schema(
  {
<<<<<<< HEAD
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
=======
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
>>>>>>> 5e79c0417145f7b2cb6fcc21d3a94d0ff80a95e5
  },
  {
    collection: 'data'
  }
)

module.exports = mongoose.model('Data', Data)
