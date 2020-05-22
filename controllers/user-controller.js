const User = require('../models/user')

exports.getLogin = (req, res) => {
  res.render('login', {
    pageTitle: 'Login'
  });
}

exports.postLogin = (req, res) => {
  const {username, password} = req.body
  User.create({username, password })
  res.send('ok');
}

exports.getSignUp = (req, res) => {
  res.render('signup', {
    pageTitle: 'Sign Up'
  })
}

exports.postSignUp = (req, res) => {
  const {username, password, email} = req.body;
  User.findAll({where: {
    username
  }
})
  .then(user => {
    if (user.length > 0 ){
      res.send('ok');
    } else {
      res.send('user')
    }
  })
  .catch(err => console.log(err))
}