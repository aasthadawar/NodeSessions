const userModel = require('../model/user');
var passport = require('passport')
var LocalStrategy = require('passport-local');
var bcrypt = require('bcrypt');
const token = require('./token');

passport.use(new LocalStrategy({
  usernameField: 'email', passReqToCallback: true
}, async (req,email, password, done) => {
  try {
      const user = await userModel.findOne({ email: email });
      //console.log('user :::::::::::;',user);

      if (!user) {
          return done(null, {
              status: false,
              message: "That e-mail address  doesn't have an associated user account"
          });
      }

     let isMatch =  await bcrypt.compare(password, user.password);
     //console.log('ismatch :::::::::;;;',isMatch);
      if (!isMatch) {
          return done(null, {
              status: false,
              message: "Invalid username and password."
          })
      }
   
      done(null, {
          status: true,
          data: user
      });
  } catch (error) {
      done(error, {
          status: false,
          message: error
      });
  }
}));

module.exports = passport;

