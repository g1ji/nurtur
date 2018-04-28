function handleError(req, res) {
    if (res.satusCode) {
        return res.status(res.satusCode).send({ error: res.error });
    }
    return res.status(500).send({ error: res.error });
}
var middleware = {
    // sendUser: function (req, res) {
    //     if (res.error) {
    //         return  handleError(req, res);
    //     }
    //     var user = _.omit(res.user,
    //             ['password_hash', 'security_salt', 'created_on', 'modified_on', 'address']);
    //     res.status(200).json(user);
    // },
    // sendAllUser: function (req, res) {
    //     if (res.error) {
    //         return  handleError(req, res);
    //     }
    //     var users = res.user;
    //     var keyToDelete = ['password_hash', 'security_salt', 'created_on', 'modified_on', 'address'];

    //     users.forEach(function (user) {
    //         keyToDelete.forEach(function (key) {
    //             delete user[key];
    //         });
    //     });
    //     res.status(200).json(users);
    // },
    sendStatus: function (req, res) {
        if (res.error) {
            return handleError(req, res);
        }
        var successSttus = {}
        if (res.user && res.user.affectedRows) {
            successSttus.status = "success";
        } else {
            successSttus.status = "fail";
        }
        res.status(200).json(successSttus);
    }
};
module.exports = middleware;