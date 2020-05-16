require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));

const routes = require('./routes/routes');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`)
});