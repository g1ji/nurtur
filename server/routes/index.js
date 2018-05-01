module.exports = function (app) {
	app.use('/user', require('./users'));
	app.use('/', require('./home'));
	
}


