const mongoose = require('mongoose');


const PlantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  scientific_name: {
    type: String
  },
  plant_id: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Plant = mongoose.model('Plant', PlantSchema);


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  plants: [PlantSchema]
});

const User = mongoose.model('User', UserSchema);



module.exports = User, Plant;
