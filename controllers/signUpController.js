var model = require('../models/signUpModel'),
    ccb =new model();
function controller() {

}
controller.prototype.post = function (req,res,next) {
    ccb.post(req,function(err,data){
        if(err)
            res.send(err);
        res.send(data);
    });
};
module.exports = controller;