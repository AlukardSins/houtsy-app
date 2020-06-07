const express = require('express')
const app = express()
const userRoute = express.Router()

// Import User model
const User = require('../model/user')

// Add User
userRoute.route('/add-user').post((req, res, next) => {
  User.create(req.body, (error, data) => {
    if (!user) {
      return res.status(404).json({ status: false , message: 'Usuario no encontrado.'});
    } else {
      return res.status(200).json({status: true, user : _.pick(user,['email','address']) }); 
    }
  })
})

// Get all user
userRoute.route('/').get((req, res) => {
  User.find((error, data) => {
    if (error) {
    } else {
      res.json(data)
    }
  })
})

// Get single user
userRoute.route('/read-user/:id').get((req, res) => {
  User.findByEmail(req.params.email, (error, user) => {
    if (!user) {
      return res.status(404).json({ status: false , message: 'Usuario no encontrado.'});
    } else {
      return res.status(200).json({status: true, user : _.pick(user,['email','address']) }); 
    }
  })
})

// Update user
userRoute.route('/update-user/:id').put((req, res, next) => {
  User.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body
    },
    (error, data) => {
      if (error) {
      } else {
        res.json(data)
        console.log('User successfully updated!')
      }
    }
  )
})

// Delete user
userRoute.route('/delete-user/:id').delete((req, res, next) => {
  User.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = userRoute
