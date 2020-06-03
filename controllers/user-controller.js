const User = require('../models/user');

exports.getUserData = (req, res) => {
  res.render('user', {
    pageTitle: 'User Data'
  })
}

exports.getRecommendations = (req, res) => {
  res.render('recommendations', {
    pageTitle: 'Recommendations'
  })
}