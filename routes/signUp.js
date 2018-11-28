var express = require('express'),
    router = express.Router(),
    controller =require('../controllers/signUpController'),
    cca =new controller;

router.post('/',cca.post.bind(cca));

module.exports = router;