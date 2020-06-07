const express = require('express')
const app = express()
const dataRoute = express.Router()

// Import Data model
const Data = require('../model/data')

// Add Data
dataRoute.route('/add-data').post((req, res, next) => {
  Data.create(req.body, (error, data) => {
    if (error) {
    } else {
      res.json(data)
    }
  })
})

// Get all data
dataRoute.route('/').get((req, res) => {
  Data.find((error, data) => {
    if (error) {
    } else {
      res.json(data)
    }
  })
})

// Get single data
dataRoute.route('/read-data/:id').get((req, res) => {
  Data.findById(req.params.id, (error, data) => {
    if (error) {
    } else {
      res.json(data)
    }
  })
})

// Update data
dataRoute.route('/update-data/:id').put((req, res, next) => {
  Data.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body
    },
    (error, data) => {
      if (error) {
      } else {
        res.json(data)
        console.log('Data successfully updated!')
      }
    }
  )
})

// Delete data
dataRoute.route('/delete-data/:id').delete((req, res, next) => {
  Data.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = dataRoute
