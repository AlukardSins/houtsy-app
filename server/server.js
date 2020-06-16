const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const dbConfig = require('./db/config')
const rabbitURL = 'amqp://zjvtghki:uIDw7fq4y-H8XbLrhcSAMDVNH5-K3llA@shark.rmq.cloudamqp.com/zjvtghki'

var amqp = require('amqplib/callback_api')

// Connecting mongoDB
mongoose.Promise = global.Promise
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(
    () => {
      console.log('Database connected sucessfully')
    },
    (error) => {
      console.log('Could not connected to database : ' + error)
    }
  )

// Set up express js port
const userRoute = require('./routes/user.routes')
const dataRoute = require('./routes/data.routes')

const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(cors())

// Setting up static directory
app.use(express.static(path.join(__dirname, 'dist/houtsy-app')))

// RESTful API roots
app.use('/api/user', userRoute)
app.use('/api/data', dataRoute)

// PORT
const port =  8000

app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Find 404 and hand over to error handler
app.use((req, res) => {
  res.send('404 Page not found')
})

// Index Route
app.get('/', (req, res) => {
  res.send('Invaild endpoint')
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/houtsy-app/index.html'))
})

// error handler
app.use(function (err, req, res) {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})

amqp.connect(rabbitURL, function (err, conn) {
  conn.createChannel(function (err, ch) {
    ch.consume('sensor-data', function (data) {
      console.log('.....')
      setTimeout(function(){
        //aqui hay que dividir el string data y llevarlo a la db
  
        console.log("Message:", data.content.toString())
      },4000);
      },{ noAck: true }
    )
  })
})
