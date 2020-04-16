const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const Plant = require('../models/Plant')
// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

router.get('/api', ensureAuthenticated, (_,res)=>res.json(
  Plant.find({})
  .then(plants=>{res.json(plants)})
  .catch(err=>{console.log(err)})
))


module.exports = router;
