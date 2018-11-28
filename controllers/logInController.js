var models = require('../models/logInModel'),
    ccf = new models();

function logInController() {

}

logInController.prototype.post = function (req, res) {
    ccf.post(req, function (err, data) {
        if (err)
            res.send(err);
        res.send(data);
    });
};

module.exports = logInController;