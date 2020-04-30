const express = require('express');
const addUserRouter = express.Router();
const dateMiddleware = require('../Middlewares/Date');
const userArray = require('../utils/UserObject');

addUserRouter.use(dateMiddleware);

addUserRouter.post('/', (req, res) => {
  let dateArray = req.date.split(' ');
  let dateString = `${dateArray[0]} ${dateArray[1]} ${dateArray[2]} ${dateArray[3]} ${dateArray[4]}`;
  let userObject = req.body;
  let formatObject = { ...userObject, created_on: dateString };
  userArray.push(formatObject);
  res.sendStatus(200);
});

module.exports = addUserRouter;
