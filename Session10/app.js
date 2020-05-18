const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const itemRoute = require('./routes/items');

app.use(bodyParser.json());

app.use('/items', itemRoute);

app.listen(process.env.PORT || 3579, () => {
  console.log('server start');
});

module.exports = app;
