const bcrypt = require('bcrypt');

const User = require('../models/user');

exports.getLogin = (req, res) => {
  res.render('login', {
    pageTitle: 'Login'
  });
}

exports.postLogin = (req, res) => {
  console.log(req.body)
  const {
    username,
    password
  } = req.body
  let validPassword;

  User.findAll({
      where: {
        username: username
      }
    })
    .then(users => {
      const user = users[0]
      bcrypt.compare(password, user.password)
        .then(doMatch => {
          if (doMatch) {
            req.session.isLoggedIn = true;
            return res.redirect('/');
          }
          res.send('Invalid Username and/or Password');
        })
    })
    .catch(err => console.log(err))
}

exports.getSignUp = (req, res) => {
  res.render('signup', {
    pageTitle: 'Sign Up'
  })
}

exports.postSignUp = async (req, res) => {
  let {
    username,
    password,
    email
  } = req.body;
  password = await bcrypt.hash(password, 10);

  User.findAll({
      where: {
        username
      }
    })
    .then(user => {
      if (user.length > 0) {
        res.redirect('/login');
      } else {
        User.create({
          username,
          password,
          email
        })
        res.redirect('/')
      }
    })
    .catch(err => console.log(err))
}