require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));

const routes = require('./routes/routes');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(routes);

sequelize.sync()
  .then(res => {
    app.listen(PORT, () => {
      console.log(`Now listening on port ${PORT}`)
    })
  })
  .catch(err => console.log(err));