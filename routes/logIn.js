var express = require('express'),
    router = express.Router(),
    control = require('../controllers/logInController'),
    ccd = new control();

router.post('/', ccd.post.bind(ccd));

module.exports = router;