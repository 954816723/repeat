const express = require('../lib/express');
const app = express();

app.get('/',function(req,res,next){
    console.log(1);
    next();
},function(req,res,next){
    console.log(11);
    next();
})
app.get('/water',function(req,res,next){
    console.log(2);
    next();
})
app.get('/', function (req, res, next) {
    console.log(3);
    res.end('ok');
})
app.listen(8080)