const express = require('express');
const homeRouter = express.Router();
const usersArray = require('../utils/UserObject');

homeRouter.get('/', (req, res) => {
  res.send(JSON.stringify(usersArray));
});

homeRouter.delete('/:id', (req, res) => {
  let id = req.params.id;
  usersArray.forEach((ele, index) => {
    if (ele.created_on == id) {
      usersArray.splice(index, 1);
    }
  });
  res.json(usersArray);
});

module.exports = homeRouter;
