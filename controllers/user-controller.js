const User = require('../models/user')

exports.getLogin = (req, res) => {
  res.render('login', {
    pageTitle: 'Login'
  })
}

exports.postLogin = (req, res) => {
  res.send('ok')
}

exports.getSignUp = (req, res) => {
  res.send('Sign Up')
}