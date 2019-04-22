let http = require('http');
process.on('message',function(msg,server){
    if(msg === 'server'){
        http.createServer(function(req,res){
            res.setHeader('Content-Type','text/html;charset=utf8');
            res.end('请求在子进程被处理');
        }).listen(server);
    }
})