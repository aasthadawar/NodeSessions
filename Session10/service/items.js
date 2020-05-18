const itemModel = require('../model/items');

const itemOperations = {
  create: async (createdItem) => {
    try {
      const item = await itemModel.create({ ...createdItem });
      return item;
    } catch (e) {
      return 'cannot create a record';
    }
  },
  getAll: async () => {
    try {
      const items = await itemModel.find();
      return items;
    } catch (e) {
      return 'cannot find records';
    }
  },
  getByName: async (name) => {
    try {
      const items = await itemModel.find({ name });
      return items;
    } catch (e) {
      return 'cannot find records';
    }
  },
  delete: async ({ id }) => {
    try {
      const response = await itemModel.deleteMany({
        _id: id,
      });
      return response;
    } catch (e) {
      return 'cannot delete a record';
    }
  },
  update: async (id, updatingrecords) => {
     try{
      await itemModel.where({ _id: id }).updateOne({ updatedDate: Date() });
      const response = await itemModel.updateOne(
        { _id: id },
        { ...updatingrecords },
      );
      return response;
      }
      catch(e){
          return 'caanot update records';
      }
  },
};

module.exports = itemOperations;
