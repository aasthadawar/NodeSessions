const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/Users');

const app = express();

app.use(cors());

// use this for Q3
app.use('/users',userRoute);

app.listen(process.env.PORT || 2468, () => {
  console.log('server start');
});
