const express = require('express');
const aboutRouter = express.Router();
const aboutObject = require('../utils/aboutObject');

aboutRouter.get('/', (req, res) => {
    res.json(aboutObject);
    res.end();
});

module.exports = aboutRouter;
