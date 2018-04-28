var connectionPool = global.connectionPool;

module.exports = {
    insertData: function (req, res, next) {
        if (res.error) {
            next();
        }
        var query = req.query;
        var query = req.queryData;
        connectionPool.getConnection(function (err, connection) {
            connection.query(query, function (error, results, fields) {
                connection.release();
                if (error) {
                    var errorPopup = {};
                    errorPopup.Title = "unknown error !";
                    errorPopup.msg = "unknown error occurred";
                    errorPopup.details = error;
                    res.satusCode = 500;
                    res.error = errorPopup;
                    next();
                }
                if (results) {
                    res.responseData = results;
                    next();
                } else {
                    var errorPopup = {};
                    errorPopup.Title = "No record found !";
                    errorPopup.msg = "No record found";
                    errorPopup.details = "no record found";
                    res.error = errorPopup;
                    res.satusCode = 400;
                    next();
                }
            });
        });
    }
}