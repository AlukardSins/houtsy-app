const mongoose = require('mongoose')
const Schema = mongoose.Schema

var User = new Schema(
  {
    userType: {
      type: String,
      required: true
    },
    idType: {
      type: String,
      required: true
    },
    idNumber: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    aptId: {
      type: String
    },
    email: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    }
  },
  {
    collection: 'users'
  }
)

module.exports = mongoose.model('User', User)
