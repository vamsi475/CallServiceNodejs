var User = require('../utils/mongo-connection'),
    jwt =require('jsonwebtoken');

function model() {

}

model.prototype.post = function (req, callback) {
   console.log("req.body", req.body);
    if (req.body) {
        User.find({"email":req.body.email}, function (err, data) {
            console.log(err,data);
            if (err)
                callback(err, null);
            else {
                if (data.length)
                    callback(null, {"msg": "User already existed please Login"});
                else{
                    User.create(req.body, function (err, data) {
                        if (err) {
                           // console.log('err', err);
                            callback(err, null);
                        }else {
                             var token = jwt.sign(req.body,'supersecret', {expiresIn: 10});
                             callback(null, {"msg": "signUp Successfully please Enjoy the Service","token":token})

                        }
                    });
                }
            }

        });
    }
};

module.exports = model;