var express = require('express'),
    app =express(),
    bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
console.log('vamsi');
app.use(function(req,res,next){
    if(req.url.substr(-1)=== '/')
   res.send('Welcome to CallService');
    next();

});
 app.use('/v1',require('./routes'));
app.listen(9000);
module.exports =app;