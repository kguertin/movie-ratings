const path = require('path');

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const sequelize = require('./util/database');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const User = require('./models/user');
const {extendDefaultFields} = require('./models/session');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

const sessionStore = new SequelizeStore({
  db: sequelize,
  table: 'session',
  extendDefaultFields: extendDefaultFields
});

app.use(session({
  secret: 'my secret',
  resave: false,
  saveUninitialized: false,
  store: sessionStore
}))

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  next();
})

const routes = require('./routes/routes');

app.use(routes);

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Now listening on port ${PORT}`);
    })
  })
  .catch(err => console.log(err));