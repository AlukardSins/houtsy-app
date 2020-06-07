const mongoose = require('mongoose')
const Schema = mongoose.Schema

var User = new Schema(
  {
    userId:{
      type: String
  },
  idUsuario:{
    type: String
  },
  userType:{
    type: String
  },
  idType:{
    type: String
  },
  idNumber:{
    type: String
  },
  address:{
    type: String
  },
  email:{
    type: String
  },
  phoneNumber:{
    type: String
  },
  },
  {
    collection: 'users'
  }
)

module.exports = mongoose.model('User', User)
