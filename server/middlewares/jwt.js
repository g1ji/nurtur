var connectionPool = global.connectionPool;

module.exports = {
    encriptPass: function (req, res, next) {
        if (res.error) {
            next();
        }
    }
}