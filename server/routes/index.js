





module.exports = function (app) {
    app.use('/users', require('./users'));
    app.use('/', require('./home'));
    
}


