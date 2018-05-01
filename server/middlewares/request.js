var jwt = require('jwt-simple');

exports.validateNewUserData = function (req, res, next) {
        var validatedData = {
            u_name: "",
            u_email: "",
            u_pass: ""
        };
        validatedData.u_name = req.body.name;
        validatedData.u_email = req.body.email;
        validatedData.u_pass = req.body.pass;
        var errorPopup = {};
        if (validatedData.u_name < 2) {
            var errorPopup = {};
            errorPopup.Title = "Invalid user name !";
            errorPopup.msg = "Please enter a valid Invalid user name !";
            req.satusCode = 500;
            req.error = errorPopup;
            next();
        }

        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (validatedData.u_name == "" || validatedData.u_name == undefined || !(re.test(validatedData.u_name.toLowerCase()))) {
            var errorPopup = {};
            errorPopup.Title = "Invalid email address !";
            errorPopup.msg = "Please enter a valid email address !";
            req.satusCode = 500;
            req.error = errorPopup;
            next();
        }
        if (validatedData.u_pass.length < 4) {
            var errorPopup = {};
            errorPopup.Title = "Invalid email password !";
            errorPopup.msg = "Password length must be minimum 4 characters !";
            req.satusCode = 500;
            req.error = errorPopup;
            next();
        }
        console.log("+++++++++++++++++++++++++++++++++++++++++1");
        var secret = (new Date()).getTime();
        var payload = validatedData.u_pass;
        validatedData.u_pass = jwt.encode(payload, "secret");
        validatedData.u_secret = secret;
        req.validatedData = validatedData;
        // next();
    }; 