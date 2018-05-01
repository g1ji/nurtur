var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var routes = require('./server/routes/index');
var mysql = require('mysql');
var dbConfig = require('./server/config/db');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('client'))
app.use("/bower_components", express.static(__dirname + "/bower_components"));


global.connectionPool = mysql.createPool(dbConfig);
console.log(global.connectionPool);
routes(app);
app.listen(8080, () => console.log('Example app listening on port 8080!'))