var User = require('../utils/mongo-connection'),
    jwt =require('jsonwebtoken');

function logInModel() {

}

logInModel.prototype.post = function (req, callback) {
    console.log("req.body", req.body);
    if (req.body) {
        User.find({"email": req.body.email}, function (err, data) {
            console.log(err, data);
            if (err)
                callback(err, null);
            else {
                if (data.length) {
                    User.find({"password": req.body.password}, function (err, data) {
                        if (data.length) {
                            var token = jwt.sign(req.body,'supersecret', {expiresIn: 86400});
                            console.log('token', token);
                            callback(null, {"msg": "Sucessfully LogIn","token":token});
                        }
                        else
                            callback(null, {"msg": "InCorrect UserName or PassWord"});
                    });
                }
                else
                    callback(null, {"msg": "User Not Registered please SignUp"})
            }
        })
    }
    ;
};
module.exports = logInModel;