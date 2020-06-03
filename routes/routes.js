const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movie-controller');
const authController = require('../controllers/auth-controller');
const userController = require('../controllers/user-controller');

const isAuth = require('../middleware/is-auth');

router.get('/popular', movieController.getTrending);

router.get('/search-movies', movieController.getSearchResults);

router.get('/movies/:id', movieController.getMovieDetails);

router.get('/login', authController.getLogin);

router.post('/login', authController.postLogin);

router.post('/logout', authController.postLogout);

router.get('/signup', authController.getSignUp);

router.post('/signup', authController.postSignUp)

router.get('/', movieController.getHome);

router.get('/user', isAuth, userController.getUserData);

router.get('/recommendations', isAuth, userController.getRecommendations);

module.exports = router;