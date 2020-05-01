const express = require('express');
const axios = require('axios');

const userRoute = express.Router();

// route to take param and call async function to send user object in response
userRoute.get('/:username', (req, res) => {
  let userName = req.params.username;
  axiosCall(userName)
    .then((userObject) => {
      res.json(userObject);
    })
    .catch((error) => console.log(error));
});

// async function to make axios as to implement async await
async function axiosCall(userNameObject) {
  try {
    let userObject = await axios.get(
      `https://api.github.com/users/${userNameObject}`,
    );
    return userObject.data;
  } catch (e) {
    return 'error';
  }
}

module.exports = userRoute;
