

module.exports = {
    registr: function (req, res, next) {
        req.validated = req.body
        console.log(req.body)
        console.log(req.validatedData)
        var user = {};
        user.u_name = req.validatedData.u_name;
        user.u_email = req.validatedData.u_email
        user.u_pass = req.validatedData.u_pass;
        user.u_secret = req.validatedData.u_secret;
        req.query = "'INSERT INTO r_user SET ?'";
        req.data = user;
        next();
    }
};  