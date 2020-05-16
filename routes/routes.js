const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movie-controller');

router.get('/popular', movieController.getPopular);

router.get('/search-movies', movieController.getSearchResults);

router.get('/', movieController.getHome);

module.exports = router;