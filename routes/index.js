var express = require('express'),
    router = express.Router();
console.log("This is CallService version one 1");
router.get('/', function (req, res, next) {
    res.send('This is CallService version one');
    next();
});
router.use('/signUp', require('./signUp'));
router.use('/logIn', require('./logIn'));

module.exports = router;
