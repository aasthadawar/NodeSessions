const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const auth = require('./config');
const userModel = require('../model/user');

const google = new GoogleStrategy(
  auth,
  async (accessTokn, refreshToken, profile, done) => {
    // console.log('google strategy callback', profile);
    let userFoundOrNot = await userModel.findOne({
      email: profile._json.email,
    });
    if (userFoundOrNot === null) {
      await userModel.create({
        name: profile._json.name,
        email: profile._json.email,
      });
    }
    done(null, profile);
  },
);

passport.use(google);

module.exports = passport;
