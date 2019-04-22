const express = require('./express');
const app = express();

app.use(function(req,res,next){
    res.setHeader('Content-Type','text/html;charset=utf8');
    console.log('没有路径的中间件');
    // 调用next的时候如果传递任意一个参数就表示此函数发生错误
    // 然后express就会跳过后面的所有的中间件和路由
    // 交给错误处理中间件来处理
    next();
    // next('出错了');
});
app.use('/water',function(req,res,next){
    console.log('过滤中间件');
    // res.end('over');
    // next('xixi');
    next();
});
app.get('/water',function(req,res){
    console.log(req.query);
    console.log(req.path);
    console.log(req.hostname);
    res.end('water');
});
// 错误处理中间件,有四个参数
app.use(function(err,req,res,next){
    res.end('错误处理中间件:'+err)
})
app.listen(8080,function(){
    console.log('server started')
})