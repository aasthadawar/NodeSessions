const jwt = require('jsonwebtoken');

// middleware function to check whether the token is valid or not
// it checks on links except the login page
const withAuth = function (req, res, next) {
  var token = req.headers['x-access-token'];
  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, 'privatekey', function (err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        next();
      }
    });
  }
};

module.exports = withAuth;
