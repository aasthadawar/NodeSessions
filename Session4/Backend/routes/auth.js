const express = require('express');
const authRoute = express.Router();
const userArray = require('../utils/UserObject');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../Middlewares/middleware');

// route for login page 
// to check whether the user exists or not
authRoute.post('/login', (req, res, next) => {
  let usern = req.body.username;
  let pass = req.body.password;

  let userFound = userArray.find(
    (user) => user.username == usern && user.password == pass,
  );

  if (userFound) {
    let tok = jwt.sign({ userFound }, 'privatekey', { expiresIn: 60 });
    let obj = { ...userFound, token: tok };
    let toke = obj.token;
    res.send(toke);
  } else {
    res.sendStatus(404);
  }
});

// route to get the data once the user have authorization token
authRoute.get('/data', authMiddleware, (req, res) => {
  res.send('hi welcome user');
});

module.exports = authRoute;
