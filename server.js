// Common modules
const path = require('path')
// MongoDB
const mongoose = require('mongoose')
const dbKey = 'a5ZzeU0vf8r4ZZdO'
const db = process.env.MONGODB_URI || 'mongodb+srv://alchemist:'+dbKey+'@cluster0-0zueo.mongodb.net/Garden-Guru?retryWrites=true&w=majority'

mongoose
  .connect(db,{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },()=>{
    console.log(`🦢The Goose is loose 🦢`)
   })

// Initializing Express
const express = require('express'),
      app = express(),
      port = process.env.PORT || 4000

// Middlewares
const bodyParser = require('body-parser'),
      passportControl = require('./lib/passport-control')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(passportControl.initialize())
app.use(express.json())
// Global variables
app.use(function(_, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Routes
app.use('/', require(path.join(__dirname,'./routes')));


// Run server
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
}
// Start the API server
app.listen(port, function () {
  console.log(`🌷🌹🌻🌼🍁GARDEN GURU🍁🌼🌻🌹🌷`)
  console.log(`now listening on PORT ${port}`)
})