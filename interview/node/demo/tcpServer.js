let net = require('net');
let path = require('path');
let ws = require('fs').createWriteStream(path.join(__dirname, 'msg.txt'));

let server = net.createServer({},function(socket){
    console.log('客户端已连接');
    console.log(socket.address());
    // 设置客户端最大连接数量
    server.maxConnections = 2;
    // 获取当前客户端连接数量
    server.getConnections((err,count)=>{
        console.log(`当前连接数量${count}`);
    })
    socket.pause();
    // 设置客户端的超时时间,如果客户端一直不输入超过一定的事件就认为超时了
    socket.setTimeout(3*1000);
    socket.on('timeout',function(){
        console.log('timeout');
        // 默认情况下,当可读流读到末尾的时候会关闭可写流
        socket.pipe(ws,{end:false});
    });
    socket.setEncoding('utf8');
    socket.on('data',function(data){
        console.log('接受客户端发过的数据:%s',data);
        socket.write('服务端确认'+data);
    });
    // 服务器收到客户端发出的关闭连接请求时,会触发end事件
    // 此时客户端并没有真正关闭,只是开始关闭,真正关闭的时候还会触发一个close事件
    socket.on('end',function(){
        console.log('客户端正在关闭');
        // 调用此方法后,当所有的客户端关闭跟本服务器的连接后,将关闭服务器
        server.unref();
    });
    setTimeout(() => {
        // 执行close方法,客户端将不再接受新的连接
        // 但是不会关闭现有连接
        server.close();
    }, 5000);
    // hasError有true表示异常关闭
    socket.on('close',function(hasError){
        console.log('客户端已关闭',hasError);
    })
});
server.listen(8080,function(){
    console.log(server.address());
    console.log('服务器启动成功');
});
server.on('close',function(){
    console.log('服务器关闭');
})