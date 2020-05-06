const express = require('express');
const itemRouter = express.Router();
const itemController = require('../controller/items');

itemRouter.post('/', itemController.create);

itemRouter.get('/', itemController.getAll);

itemRouter.get('/:name', itemController.getByName);

itemRouter.delete('/:id', itemController.delete);

itemRouter.patch('/:id', itemController.update);

module.exports = itemRouter;
