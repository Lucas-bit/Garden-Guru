const passport = require('passport'),
      Strategy = require('passport-local').Strategy,
      User = require('../db/Users'),
      passportJWT = require("passport-jwt"),
      JWTStrategy = passportJWT.Strategy,
      ExtractJWT = passportJWT.ExtractJwt


// Local Strategy
passport.use(new Strategy( (username, password, done) => {
  User.findOne({username: username}, (err, user) => {

    // If any error
    if (err) { return done(err) }

    if (!user) {
      return done(null, false, {
        message: 'No user found.'
      })
    }

    user.login(password).then(() => {
       return done(null, user)
    }).catch((err) => {
      return done(err, false, {
        message: 'Password not matched.'
      })
    })
  })
}))


passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'jwt_secret'
  }, (jwt_payload, done) => {
    User.findById(jwt_payload.id).then(user => {
      return done(null, user)
    }).catch(err => {
      return done(err, false, {
        message: 'Token not matched.'
      })
    })
  }))

module.exports = passport