var reqMiddleware = require('../middlewares/request');
var userCtrl = require('../controllers/usersCtrl');
var dbMiddleware = require('../middlewares/mysql');
var resMiddleware = require('../middlewares/response');

var express = require('express');
var router = express.Router();

router.post('/registration',
	reqMiddleware.validateNewUserData,
	userCtrl.registr,
	dbMiddleware.insertData,
	resMiddleware.sendStatus
	);
module.exports = router;
