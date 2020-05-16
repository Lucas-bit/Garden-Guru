/*eslint-disable */
const express = require('express'),
  passport = require('passport'),
  jwt = require('jsonwebtoken'),
  User = require('../db/Users'),
  router = express.Router()

/* API entrypoints */
// Singup
router.post('/register', (req, res) => {
  var user = new User({
    name: req.body.name,
    username: req.body.email,
    password: req.body.password
  })

  user.save().then(() => {

    // Token
    const token = jwt.sign({ id: user.id }, 'jwt_secret')
    res.json({ token: token })

  }).catch((err) => {
    console.error(err)
    res.status().json({})
  })
})

// Login
router.post('/login', passport.authenticate('local', {
  session: false
}), (req, res) => {
  // Token
  const token = jwt.sign({ id: req.user.id }, 'jwt_secret')
  res.json({ token: token })
})


// Return user data
router.get('/mygarden', passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  if (!req.user) {
    res.json({
      username: 'nobody'
    })
  }

  res.json({
    username: req.user.username
  })
})


router.get('/api/user', passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  if (!req.user) {
    res.json({
      username: 'nobody'
    })
  }
  const user = req.user
  User.find({ username: user.username }).then(response => { return response })
  res.send(user)
})




router.post("/api", passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  if (!req.user) {
    alert("No User")
  }
  const plant = req.body
  const query = { username: req.user.username }
  User.findOneAndUpdate(query,
    {
      $push:
      {
        plants: {
          name: plant.name,
          plant_id: plant.id,
          scientific_name: plant.scientific
        }
      }
    },
    { safe: true, new: true }, (err, res) => {
      if (err) { console.error(err) }

      console.log("Added plant!")

    })
})

// route for maintenance
router.post("/api/maintenance", passport.authenticate('jwt', {
  session: false
}), (req, res) => {

  if (!req.user) {
    alert("No User")
  }
  const query = { username: req.user.username }
  const entry = req.body.type

  User.findOneAndUpdate(query,
    {
      $push:
      {
        maintenance: {
          type: entry
        }
      }
    },
    { safe: true, new: true }, (err, res) => {
      if (err) { console.log(err) }

      console.log("Added maintenance!")

    })
  })


  router.delete('/api/plant/:id', passport.authenticate('jwt', {
    session: false
  }), (req, res) => {
    if ( !req.user ) {
      alert("No User")
    } 
    const query = { username: req.user.username }
    User.updateOne(query, //trying to update here and is erroring out
      { $pull: 
        { plants: {_id: req.params.id}}},
      (err,res)=>{
        if (err) {console.log(err)}
  
        console.log("Deleted plant!")  
    })
    res.status(200)
  })

  module.exports = router