const express = require('express');
const router = express.Router();

const homeControler = require('../controllers/home-controller');

router.get('/', homeControler.getHome);

module.exports = router;