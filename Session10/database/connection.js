const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27018/session6db', {
  useNewUrlParser: true,
});

mongoose.connection.on('connected', (res) => {
  console.log('mongoose connected');
});

mongoose.connection.on('error', (err) => {
  console.log('error occured in mongoose', err);
});

module.exports = mongoose;
