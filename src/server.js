const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser'); 
const bodyParser = require('body-parser');

require('dotenv').config();

const routes = require('./routes.js');
require('./database').connect();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(cookieParser()); 
app.use(routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
})