var home = require('../controllers/homeCtrl');
var express = require('express');
var router = express.Router();

router.get('/',
	home.landingPage
	);

module.exports = router;