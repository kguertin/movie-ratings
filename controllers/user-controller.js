const User = require('../models/user')

exports.getLogin = (req, res) => {
  res.render('login', {
    pageTitle: 'Login'
  });
}

exports.postLogin = (req, res) => {
  const {username, password} = req.body
  User.findAll({where: {
    username,
    password
  }})
  .then(user => {
    if (user.length > 0) {
      res.redirect('/')
    } else {
      res.send('Invalid Username and/or Password');
    }
  })
  .catch(err => console.log(err))
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
      res.redirect('/login');
    } else {
      User.create({username, password, email})
      res.redirect('/')
    }
  })
  .catch(err => console.log(err))
}