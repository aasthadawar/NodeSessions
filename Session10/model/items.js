const connection = require('../database/connection');
const Schema = connection.Schema;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  isSanitized: {
    type: Boolean,
  },
  unit: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: Date,
  },
  createdDate: {
    type: Date,
    default: Date(),
  },
  updatedDate: {
    type: Date,
    default: Date(),
  },
  category:{
      type:String,
      enum:['Grocery', 'Medical', 'Fruits&Veg', 'Berverages', 'Babycare', 'Cleaning']
  },
  location: {
      type: String,
      enum : ['Store','Kitchen']
  }
});

const itemModel = connection.model('Items', itemSchema);

module.exports = itemModel;
