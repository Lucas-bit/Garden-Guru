/*eslint-disable */
const express = require("express");
const mongojs = require("mongojs");
const path = require("path")
const logger = require("morgan");
const fetch = require('node-fetch');
const mongoose = require('mongoose')
const app = express();

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
})
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "garden";
const collections = ["plants", "maintenance"];

const maintenance = require ("./models/maintenance")
// const db = mongojs(databaseUrl, collections);
// db.on("error", error => {
//   console.log("Database Error:", error);
// });

const key = "dFJuTGR0eWxpTTR5N2xXVTczWlMvZz09"
const url = "https://trefle.io/api/plants?token="+key


// Routes
// ======

// TODO: Fill in each route so that the server performs
// the proper mongojs functions for the site to function
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// Post a book to the mongoose database
app.post("/submit", ({ body }, res) => {
  // Save the request body as an object called book
  
});

// Find all books marked as read
app.get("/", (req, res) => {
    fetch(url).then(response=>response.json())
    .then(json =>{
        console.log(json)
        console.log(json.length)})
});

// Find all books marked as unread
app.get("/unread", (req, res) => {});

// Mark a book as having been read
app.put("/markread/:id", (req, res) => {
  // Remember: when searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IdYouWantToFind))
});

// Mark a book as having been not read
app.put("/markunread/:id", (req, res) => {
  // Remember: when searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IdYouWantToFind))
});

// route for maintenance
app.get('/api/maintenance', (req, res) => {
// call database for all entries
 maintenance.find()

 .then(dbMaintenance => {
  res.json(dbMaintenance)
})
.catch(err => {
  res.status(404).json(err)

 })
})
//receiveing entry from front end accessable on req.body
  // req.body save to the database
app.post("/api/maintenance", ({ body }, res) => {
  // we receive data on req.body
  console.log('=============')
  console.log(body)
  maintenance.create( body )
    .then(dbMaintenance => {
      console.log(dbMaintenance)
      res.json(dbMaintenance)
    })
    .catch(err => {
      console.log(err)
      res.status(404).json(err)
    })
})
 



// Listen on port 3001
app.listen(3001, () => {
  console.log("App running on port 3000!");
});

