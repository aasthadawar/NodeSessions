const jwt = require('jsonwebtoken');

// middleware function to check whether the token is valid or not
// it checks on links except the login page
const withAuth = function (req, res, next) {
console.log('headers',req.headers['x-access-token']);
  var token = req.headers['x-access-token'];
  //console.log('token is::::::::::::',token);
  if (!token) {
    console.log('not token')
    res.status(401).send('No token provided');
  } else {
    jwt.verify(token, 'thisisthesecretkey', function (err, decoded) {
      if (err) {
        console.log('not valid token')
        res.status(401).send('Invalid token');
      } else {
          res.send('hi welcome user');
        next();
      }
    });
  }
};

module.exports = withAuth;