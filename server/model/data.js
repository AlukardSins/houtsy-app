const mongoose = require('mongoose')
const Schema = mongoose.Schema

var Data = new Schema(
  {
    // Yada yada
  },
  {
    collection: 'data'
  }
)

module.exports = mongoose.model('Data', Data)
