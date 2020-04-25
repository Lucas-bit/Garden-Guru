// Common modules
const path = require('path')
// MongoDB
const mongoose = require('mongoose')

mongoose
  .connect(
    'mongodb://localhost:27017/passport',
   {useNewUrlParser: true, useCreateIndex: true},()=>{
    console.log(`🌎  ==> Mongo up and running!`)
   })

// Initializing Express
const express = require('express'),
      app = express(),
      port = 4000

// Middlewares
const bodyParser = require('body-parser'),
      flash = require('connect-flash'),
      passportControl = require('./lib/passport-control')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(passportControl.initialize())
app.use(express.json())
// Global variables
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Routes
app.use('/', require('./routes'));


// Run server
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}
// Start the API server
app.listen(port, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${port}!`)
})





