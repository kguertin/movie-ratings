const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movie-controller');
const userController = require('../controllers/user-controller');

router.get('/popular', movieController.getTrending);

router.get('/search-movies', movieController.getSearchResults);

router.get('/movies/:id', movieController.getMovieDetails);

router.get('/login', userController.getLogin);

router.post('/login', userController.postLogin);

router.get('/signup', userController.getSignUp);

router.post('/signup', userController.postSignUp)

router.get('/', movieController.getHome);

module.exports = router;