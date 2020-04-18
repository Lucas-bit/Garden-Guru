const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const Plant = require('../models/Plant')
const User = require('../models/User')
// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

router.get('/api', ensureAuthenticated, (req,res)=>{
  console.log(req.user)
  User.find({_id:req.user._id}).then(user=>{res.json(user)})
  // Plant.find({})
  // .then(plants=>{res.json(plants)})
  .catch(err=>{console.log(err)})
})

router.post("/api", ensureAuthenticated, (req, res) => {
  const plant = {plant_id: "134318", name: "woollycup buckwheat", scientific_name: "Eriogonum lachnogynum var. lachnogynum"}
  
  User.findByIdAndUpdate({_id:req.user._id},{$push:{plants:plant}}).then(res.redirect('/api'))
})

module.exports = router;
