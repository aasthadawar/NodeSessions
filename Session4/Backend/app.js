const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/Users');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// use thiss for Q1
app.use('/employee', authRoute);

// use this for Q3
app.use('/users', userRoute);

app.listen(process.env.PORT || 2468, () => {
  console.log('server start');
});
