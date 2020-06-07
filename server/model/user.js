const mongoose = require('mongoose')
const Schema = mongoose.Schema

var User = new Schema(
  {
    // Yada yada
  },
  {
    collection: 'users'
  }
)

module.exports = mongoose.model('User', User)
