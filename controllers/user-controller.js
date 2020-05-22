const User = require('../models/user')

exports.getLogin = (req, res) => {
  User.findByPk(1)
  .then(user => console.log(user))
  .then(() => {
    res.render('login', {
      pageTitle: 'Login'
     })
  })
  .catch(err => console.log(err));
}

exports.postLogin = (req, res) => {
  res.send('ok')
}

exports.getSignUp = (req, res) => {
  res.send('Sign Up')
}