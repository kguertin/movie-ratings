require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

const routes = require('./routes/routes');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});