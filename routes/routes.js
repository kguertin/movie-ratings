const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movie-controller');
const userController = require('../controllers/user-controller');

router.get('/popular', movieController.getPopular);

router.get('/search-movies', movieController.getSearchResults);

router.get('/movies/:id', movieController.getMovieDetails);

router.get('/login', userController.getLogin);

router.get('/signup', userController.getSignUp);

router.get('/', movieController.getHome);

module.exports = router;