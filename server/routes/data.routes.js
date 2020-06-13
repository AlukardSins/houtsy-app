const express = require('express')
const app = express()
const dataRoute = express.Router()

// Import Data model
const Data = require('../model/data')

// Add Data
dataRoute.route('/add-sensor-data').post((req, res) => {
  Data.create(req.body, (error, data) => {
    if (error) {
      return res.status(500).json({ message: 'Error de envio', error: error })
    } else {
      return res.status(201).json({ message: 'Datos añadidos correctamente', data: data })
    }
  })
})

// Get all data
dataRoute.route('/').get((req, res) => {
  Data.find((error, data) => {
    if (error) {
      return res.status(500).json({ message: 'Error de envio', error: error })
    } else if (data.length === 0) {
      return res.sendStatus(204)
    } else {
      return res.status(200).json({ message: 'Datos obtenidos', data: data })
    }
  })
})

// Get single data
dataRoute.route('/get-sensor-data/:id').get((req, res) => {
  Data.findById(req.params.userId, (error, data) => {
    if (error) {
      return res.status(500).json({ message: 'Error de envio', error: error })
    } else if (data.length === 0) {
      return res.sendStatus(204)
    } else {
      return res.status(200).json({ message: 'Datos obtenidos', data: data })
    }
  })
})

// Get all data assigned to a user
dataRoute.route('/data-user').post((req, res) => {
  Data.find({ userId: req.body._id }, (error, data) => {
    if (error) {
      return res
        .status(500)
        .json({ message: 'No se encuentra la informacion', data: { verified: false }, error: error })
    } else if (data.length === 0) {
      return res.sendStatus(204)
    } else {
      return res.status(200).json({
        message: 'Datos de sensores registrados al usuario obtenidos'
      })
    }
  })
})

// Get all data assigned to a apt Id
dataRoute.route('/data-apt').post((req, res) => {
  Data.find({ aptId: req.body.aptId }, (error, data) => {
    if (error) {
      return res
        .status(500)
        .json({ message: 'No se encuentra la informacion', data: { verified: false }, error: error })
    } else if (data.length === 0) {
      return res.sendStatus(204)
    } else {
      return res.status(200).json({
        message: 'Datos de sensores registrados al apartamento obtenidos'
      })
    }
  })
})

// Delete data
dataRoute.route('/delete-sensor-data/:id').delete((req, res) => {
  Data.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return res.status(500).json({ message: 'Error de envio', error: error })
    } else {
      return res.status(200).json({ message: 'Datos eliminados correctamente', data: data })
    }
  })
})

module.exports = dataRoute
