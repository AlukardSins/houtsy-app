const express = require('express')
const app = express()
const userRoute = express.Router()

// Import User model
const User = require('../model/user')

// Add User
userRoute.route('/add-user').post((req, res) => {
  User.create(req.body, (error, data) => {
    if (error) {
      return res.status(500).json({ message: 'Error de envio', error: error })
    } else {
      return res.status(201).json({ message: 'Usuario añadido correctamente', data: data })
    }
  })
})

// Get all users
userRoute.route('/').get((req, res) => {
  User.find((error, data) => {
    if (error) {
      return res.status(500).json({ message: 'Error de envio', error: error })
    } else if (data.length === 0) {
      return res.status(204).json({ message: 'No hay usuarios para mostrar', error: error })
    } else {
      return res.status(200).json({ message: 'Usuarios obtenidos', data: data })
    }
  })
})

// Get single user
userRoute.route('/get-user/:id').get((req, res) => {
  User.findByEmail(req.params.email, (error, user) => {
    if (error) {
      return res.status(500).json({ message: 'No se encuentra el usuario', error: error })
    } else if (!user) {
      return res.status(204).json({ message: 'No hay usuario para mostrar', error: error })
    } else {
      return res.status(200).json({ message: 'Datos obtenidos', data: user })
    }
  })
})

// Update user
userRoute.route('/update-user/:id').put((req, res, next) => {
  User.findByIdAndUpdate(req.params.id, { $set: req.body }, (error, data) => {
    if (error) {
      return res.status(500).json({ message: 'Error de envio', error: error })
    } else {
      return res.status(202).json({ message: 'Usuario modificado correctamente', data: data })
    }
  })
})

// Delete user
userRoute.route('/delete-user/:id').delete((req, res, next) => {
  User.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return res.status(500).json({ message: 'Error de envio', error: error })
    } else {
      return res.status(200).json({ message: 'Usuario eliminado correctamente', data: data })
    }
  })
})

module.exports = userRoute
