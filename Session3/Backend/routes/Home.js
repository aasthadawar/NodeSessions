const express = require('express');
const homeRouter = express.Router();
const usersArray = require('../utils/UserObject');

homeRouter.get('/', (req, res) => {
  res.send(JSON.stringify(usersArray));
});

homeRouter.delete('/', (req, res) => {
  let id = req.query.id;
  usersArray.forEach((ele, index) => {
    if (ele.created_on == id) {
      usersArray.splice(index, 1);
    }
  });
  res.json(usersArray);
});

module.exports = homeRouter;
