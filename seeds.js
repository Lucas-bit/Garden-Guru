/*eslint-disable */
let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/dbMaintenance", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let MaintenanceSeed = [
  {
    type: "water",
    date: new Date().setDate(date  for jan ect)
   
  },
  {
    type: "weed",
    date: new Date().setDate(new Date().getDate()-10 * 90)
  },
  {
    type: "Prune",
    date: new Date().setDate(new Date().getDate()-10 * 90)
  },
 

// db.Workout.deleteMany({})
//   .then(() => db.Workout.collection.insertMany(workoutSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
