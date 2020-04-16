const express = require('express');
const router = express.Router();
// Load User model
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const Plant = require('../models/Plant')


router.post("/api", ensureAuthenticated, (req, res) => {
    {}
})

// router.post('/register', (req, res) => {
//     const { name, email, password, password2 } = req.body;
//     let errors = [];
  
//     if (!name || !email || !password || !password2) {
//       errors.push({ msg: 'Please enter all fields' });
//     }
  
//     if (password != password2) {
//       errors.push({ msg: 'Passwords do not match' });
//     }
  
//     if (password.length < 6) {
//       errors.push({ msg: 'Password must be at least 6 characters' });
//     }
  
//     if (errors.length > 0) {
//       res.render('register', {
//         errors,
//         name,
//         email,
//         password,
//         password2
//       });
//     } else {
//       User.findOne({ email: email }).then(user => {
//         if (user) {
//           errors.push({ msg: 'Email already exists' });
//           res.render('register', {
//             errors,
//             name,
//             email,
//             password,
//             password2
//           });
//         } else {
//           const newUser = new User({
//             name,
//             email,
//             password
//           });
//         }}

module.exports = router