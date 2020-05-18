const express = require('express');
const userRoute = express.Router();
const passport = require('../utils/passportconfiguration');
const token = require('../utils/token');
const userController = require('../controller/user');
const passportLocal = require('../utils/passportlocal');
const authMiddleware = require('../Middlewares/authentication');

userRoute.post(
  '/login',
  passportLocal.authenticate('local', { session: false }),
  (req, res) => {
    //console.log('user request::::;;',req.user);
    //const userObject = req.user;
    if (req.user.status === true) {
      let genToken = token.createToken(req.user.data.email);
      //console.log('token ::::::',genToken);
      let userData = req.user.data._doc;
      let userObject = { ...userData, token: genToken };
      let userDetails = req.user;
      let obj = { ...userDetails, data: userObject };
      res.json(obj);
    } else {
      res.send(req.user.message);
    }
  },
);

userRoute.post('/signup', userController.create);

userRoute.get('/dashboard', authMiddleware, (req, res) => {});

userRoute.get(
  '/auth',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    session: false,
  }),
);

userRoute.get(
  '/auth/cb',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    //console.log('profile', req.user._json.email);
    let genToken = token.createToken(req.user._json.email);
    //console.log('token is::;;',genToken);
    req.headers['x-access-token'] = genToken;
    //console.log('req headers',req.headers['x-access-token']);
    if(req.headers['x-access-token']){
      res.send(`Welcome  ${req.user._json.name}`)
    }
    else{
      res.status(401).send('invalid token');
    }
}
);

module.exports = userRoute;
