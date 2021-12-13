const passport = require('passport');
const jwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt; 

const User = require('../models/User');

const passportProcess = passport.use(new jwtStrategy({
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: proccess.env.SECRET_KEY
}, (jwt_payload, done) => {

}))

module.exports = passportProcess 