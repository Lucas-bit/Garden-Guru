/*eslint-disable*/
const mongoose = require('mongoose'),
  bcrypt = require('bcrypt')


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

// Mongoose Model
var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    index: true,
    unique: true,
    minlength: 2,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  },
  plants: [PlantSchema],
  maintenance: [MaintenanceSchema]


});

// Hash password before saving
userSchema.pre('save', function (next) {
  var user = this

  // If not registration
  if (!user.isModified('password')) return next()

  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) {
      return next(err)
    }
    user.password = hash
    next()
  })
})



// Password verification
userSchema.methods.login = function (password) {
  var user = this
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) { reject(err) }

      else if (result === false) {
        reject()
      }
      resolve()
    })
  })
}


// Export Mongoose "User" model
module.exports = mongoose.model('User', userSchema)