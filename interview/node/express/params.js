const express = require('./express');
const app = express();

// : 表示这里是一个占位符,用来匹配任意字符
app.get('/user/:name/:age',function(req,res){
    console.log(req.params);
    res.end('ok');
})
app.listen(8080)