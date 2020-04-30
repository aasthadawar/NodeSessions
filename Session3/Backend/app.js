const express = require('express');
const app = express();
const homeRoute = require('./routes/Home');
const addUserRoute = require('./routes/AddUser');
const cors = require('cors');
const bodyParser = require('body-parser');
const aboutRoute = require('./routes/About')

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/home', homeRoute);

app.use('/users', addUserRoute);

app.use('/about', aboutRoute);

app.listen(process.env.PORT || 9012, () => {
  console.log('server start');
});
