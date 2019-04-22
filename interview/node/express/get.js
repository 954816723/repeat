const express = require('./express');
const app = express();
// 路由规则
app.get('/hello',function(req,res){
    res.end('hello');
})
app.post('/node',function(req,res){
    res.end('node');
})
app.all('/hehe',function(req,res){
    res.end('hehe')
})
app.all('*',function(req,res){
    res.end('*')
})
app.listen(8080);