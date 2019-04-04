let http = require('http');
let url = require('url');

let server = http.createServer();
server.on('connection',function(socket){
    console.log('客户端连接');
});
// req可读流
// res可写流
// req代表客户端的连接,server服务器将客户端的请求信息进行解析,放在req上
// res代表响应,如果希望向客户端回应消息,需要通过res
server.on('request',function(req,res){
    // 请求方法
    console.log(req.method);
    // 请求路径
    console.log(req.url);
    // 如果设置true,query就是一个对象
    let urlObj = url.parse(req.url,true);
    let old = url.format(urlObj);
    // 请求协议
    console.log(req.protocal);
    // 请求头对象
    console.log(req.headers);
    req.on('data',fucntion(){

    })
    req.on('end',function(){
        res.statusCode = 200;//设置响应码
        res.sendDate = false;//Data响应头默认设置,不想要设置false
        // 设置请求头
        res.writeHead(200,{
            "Content-Type":"text/html;charset=utf8"
        });
        // writeHead一旦调用会立刻向客户端发送,setHeader不会
        // 当调用writeHead或者write时才会向客户端发送响应头
        console.log(res.headersSent);//响应头是否发送过
        res.setHeader('Content-Type','text/html;charset=utf8');
        res.getHeader('Content-Type');
        res.removeHeader('Content-Type');
        res.write('hello');
        res.write('wrold');
        res.end();
    })
})
server.on('close',function(){
    console.log('服务器关闭');
})
server.on('error',function(err){
    console.log('服务器错误');
    
})
server.listen(8080,function(){
    console.log('server started');
})