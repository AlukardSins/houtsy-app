const express = require('express')
const app = express()
const dataRoute = express.Router()
var amqp = require('amqplib/callback_api')
const rabbitURL = 'amqp://zjvtghki:uIDw7fq4y-H8XbLrhcSAMDVNH5-K3llA@shark.rmq.cloudamqp.com/zjvtghki'

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

// Get all data assigned to a user
dataRoute.route('/data-user').post((req, res) => {
  Data.find({ userId: req.body.userId }, (error, data) => {
    if (error) {
      return res.status(500).json({ message: 'No se encuentra la informacion', error: error })
    } else if (data.length === 0) {
      return res.sendStatus(204)
    } else {
      return res.status(200).json({
        message: 'Datos de sensores registrados al usuario obtenidos',
        data: data
      })
    }
  })
})

// Get all data assigned to a apt Id
dataRoute.route('/data-apt').post((req, res) => {
  Data.find({ aptId: req.body.aptId }, (error, data) => {
    if (error) {
      return res.status(500).json({ message: 'No se encuentra la informacion', error: error })
    } else if (data.length === 0) {
      return res.sendStatus(204)
    } else {
      return res.status(200).json({
        message: 'Datos de sensores registrados al apartamento obtenidos'
      })
    }
  })
})

// Get Sensor status
dataRoute.route('/sensor-status').get((req, res) => {
  Data.findById(req.body.sensorId, (error, data) => {
    if (error) {
      return res.status(500).json({ message: 'Error de envio', error: error })
    } else if (data.length === 0) {
      return res.sendStatus(204)
    } else {
      return res.status(200).json({ message: 'Estado del sensor', status: data.status })
    }
  })
})

// Send Open / Close command
dataRoute.route('/sensor-open').post(async (req, res) => {
  amqp.connect(rabbitURL, (err, connection) => {
    if (err) {
      return res.status(500).json({ message: 'Error de conexion', error: err })
    } else {
      connection.createChannel((error, channel) => {
        if (error) {
          return res.status(500).json({ message: 'Error de canal', error: error })
        } else {
          channel.assertQueue(
            { sensorId: req.body.sensorId },
            {
              durable: false
            }
          )
          channel.sendToQueue({ sensorId: req.body.sensorId }, 'abrir')
        }
      })
    }
  })

  Data.findByIdAndUpdate({ sensorId: req.body.sensorId }, { status: true }, (error, data) => {
    if (error) {
      return res.status(500).json({ message: 'No se encuentra la informacion', error: error })
    } else if (data.length === 0) {
      return res.sendStatus(204)
    } else {
      return res.status(200).json({
        message: 'Sensor activado'
      })
    }
  })
})

dataRoute.route('/sensor-close').post(async (req, res) => {
  amqp.connect(rabbitURL, (err, connection) => {
    if (err) {
      return res.status(500).json({ message: 'Error de conexion', error: err })
    } else {
      connection.createChannel((error, channel) => {
        if (error) {
          return res.status(500).json({ message: 'Error de canal', error: error })
        } else {
          channel.assertQueue(
            { sensorId: req.body.sensorId },
            {
              durable: false
            }
          )
          channel.sendToQueue({ sensorId: req.body.sensorId }, 'cerrar')
        }
      })
    }
  })

  Data.findByIdAndUpdate({ sensorId: req.body.sensorId }, { status: false }, (error, data) => {
    if (error) {
      return res.status(500).json({ message: 'No se encuentra la informacion', error: error })
    } else if (data.length === 0) {
      return res.sendStatus(204)
    } else {
      return res.status(200).json({
        message: 'Sensor desactivado'
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
