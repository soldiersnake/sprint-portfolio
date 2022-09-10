const express = require('express');
const mainControler = require('../controllers/mainController');

const router = express.Router();

router.get('/', mainControler.home);

router.get('/about', mainControler.about);

module.exports = router;