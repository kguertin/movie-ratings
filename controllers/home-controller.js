exports.getHome = (req, res) => {
  res.render('index', { pageTitle: 'Home' });
} 