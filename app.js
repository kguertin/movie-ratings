const path = require('path');

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const sequelize = require('./util/database');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const User = require('./models/user');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'my secret',
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize
  })
}))

const routes = require('./routes/routes');

app.use(routes);

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Now listening on port ${PORT}`);
    })
  })
  .catch(err => console.log(err));