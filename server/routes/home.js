var root = require('../controllers/indexCtrl');
var express = require('express');
var router = express.Router();

module.exports = function (app) {
    router.get('/',
        root.home
    );
}