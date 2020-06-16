const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const dbConfig = require('./db/config')
const rabbitURL = 'amqp://zjvtghki:uIDw7fq4y-H8XbLrhcSAMDVNH5-K3llA@shark.rmq.cloudamqp.com/zjvtghki'
const dataModel = require('./model/data')

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
const port = 8000

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
app.use((err, req, res) => {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})

amqp.connect(rabbitURL, (err, conn) => {
  if (err) {
    console.log(err.message)
  } else {
    conn.createChannel((error, ch) => {
      if (error) {
        console.log(error.message)
      } else {
        ch.consume(
          'mqtt-subscription-mosq-onGQPvgy4gVUvZz1PQqos0',
          (data) => {
            // Aqui hay que dividir el string data y llevarlo a la db
            datos = data.content.toString().split(', ');
            let datas = new dataModel();
            datas.userId = datos[0];
            datas.sensorId = datos[1];
            datas.aptId = datos[2];
            datas.type = datos[3];
            datas.dateTime = Date(datos[4]);
            datas.data = Number(datos[5]);
            if(datos[6] === 'true'){
              datas.status = true
            }else{
              datas.status = false
            }
            datas.save((error, doc)=>{
              if(error){
                console.log(error);
              }
              datas = null;
            });
            console.log("Hola mundo");
            
            console.log('Message: ', datas)
          },
          { noAck: true }
        )
      }
    })
  }
})
