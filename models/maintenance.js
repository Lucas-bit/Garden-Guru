/*eslint-disable*/
const mongoose = require('mongoose');

// const Schema = mongoose.Schema

const MaintenanceSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
   date: {
    type: Date,
    default: Date.now
  }
})

const Maintenance = mongoose.model('Maintenance', MaintenanceSchema)

module.exports = Maintenance;