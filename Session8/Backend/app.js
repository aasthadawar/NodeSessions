const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoute = require('./routes/user');

app.use(express.static('public'));

app.use(cors());

app.use(bodyParser.json());

app.use('/',userRoute);


app.listen(process.env.PORT || 1234 , () => {
    console.log('server start');
});