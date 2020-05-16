const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home-controller');
const popularController = require('../controllers/popular-controller');

router.get('/popular', popularController.getPopular);

router.get('/', homeController.getHome);


module.exports = router;