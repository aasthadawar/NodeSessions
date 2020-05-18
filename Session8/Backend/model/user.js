const connection = require('../database/connection');
const Schema = connection.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
});

const userModel = connection.model('Users', userSchema);

module.exports = userModel;
