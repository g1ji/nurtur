exports.registr =  function (req, res, next) {
    if(req.err){
        console.log(err);
        next();
    }
        console.log("+++++++++++++++++++++++++++++++++++++++++2");

    req.validated = req.body
    console.log(req.validatedData);
    var user = {};
    user.u_name = req.validatedData.u_name;
    user.u_email = req.validatedData.u_email
    user.u_pass = req.validatedData.u_pass;
    user.u_secret = req.validatedData.u_secret;
    req.query = "'INSERT INTO r_user SET ?'";
    req.data = user;
    next();
};  