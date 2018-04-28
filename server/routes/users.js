var user = require('../controllers/usersCtrl');
var reqMiddleware = require('../middlewares/request');
var dbMiddleware = require('../middlewares/mysql');
var resMiddleware = require('../middlewares/response');

var express = require('express');
var router = express.Router();

module.exports = function (app) {
    router.post('/registration',
        reqMiddleware.validateNewUserData,
        user.registr,
        dbMiddleware.insertData,
        resMiddleware.sendStatus
    );
}