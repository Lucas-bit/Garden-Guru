/*eslint-disable */
const express = require('express'),
  passport = require('passport'),
  jwt = require('jsonwebtoken'),
  User = require('../db/Users'),
  router = express.Router()

/* API entrypoints */
// Singup
router.post('/register', (req, res) => {
  console.log(req.body)
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
  console.log(req.user)
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
      if (err) { console.log(err) }

      console.log("Added plant!")

    })
})

// route for maintenance
router.get('/api/user/maintenance', passport.authenticate('jwt', {
  session: false
}), (req, res) => {

  if (!req.user) {
    res.json({
      username: 'nobody'
    })
  }

  const user = req.user
  User.find({ username: user.maintenance.find() })



  //  .then(dbMaintenance => {
  //   res.json(dbMaintenance)
  // })
  // .catch(err => {
  //   res.status(404).json(err)

  //  })
  // }
  // })
  //   //maintenance post route

  //   router.post("/api/maintenance", ({ body }, res) => {
  //     // we receive data on req.body
  //     console.log('=============')
  //     console.log(body)
  //     // maintenance.create( body )
  //     //   .then(dbMaintenance => {
  //     //     console.log(dbMaintenance)
  //     //     res.json(dbMaintenance)
  //     //   })
  //       .catch(err => {
  //         res.status(404).json(err)
  //       })
  //   })

  // }

  module.exports = router