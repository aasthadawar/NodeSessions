const itemService = require('../service/items');

const itemControllerOperations = {
  create: async (req, res) => {
    let response;
    const isItemPresent = await itemService.getByName(req.body.name);
    if(isItemPresent.length!=0){
      response = await itemService.update(isItemPresent[0]._id,req.body);
    }
    else{
      response = await itemService.create(req.body);
    }
    res.send(response);
  },
  getAll: async (req, res) => {
      const response = await itemService.getAll();
      res.send(response);
  },
  getByName: async (req, res) => {
    const response = await itemService.getByName(req.params.name);
    res.send(response);
},
  delete: async (req, res) => {
      const response = await itemService.delete(req.params);
      res.send(response);
  },
  update: async (req, res) => {
    const response = await itemService.update(req.params.id,req.body);
    res.send(response);
},
};

module.exports = itemControllerOperations;
