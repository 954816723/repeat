let net = require('net');
let client = {};
let server = net.createServer(function(socket){
    let username;
    // socket.setEncoding('utf8');
    server.getConnections(function(err,count){
        socket.write(`欢迎进入聊天室,当前在线人数${count},请输入用户名\r\n`);
    })
    socket.on('data',function(data){
        data = data.replace(/\r\n/,'');
        if (username) {
            say(username,`${username}:${data}`);
        }else{
            if(client[data]){
                socket.write('已注册')
            }else{
                username = data;
                client[username] = socket;
                say(username, `欢迎${username}进入聊天室`)
            }
        }
    })
    socket.on('end',function(){
        say(username, `${username}离开聊天室`);
        client[username]&&client[username].destory();
        delete client[username];
    })
}).listen(8080)
function say(username,msg){
    for (const key in client) {
        if(key !== username){
            client[key].write(msg+'\r\n');
        }
    }
}