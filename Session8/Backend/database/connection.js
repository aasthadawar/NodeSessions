const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/passportdb');

mongoose.connection.on('connection',(res) => {
    console.log('connection occured');
});

mongoose.connection.on('error', (err) => {
    console.log('error occured in connection', err);
});

module.exports = mongoose;