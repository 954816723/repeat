- WebSocket是HTML5提供的一种在单个TCP连接上进行全双共通讯的协议  
- 允许服务端主动向客户端推送数据  
- 浏览器和服务器只要完成一次握手,两者之间就直接可以创建持久性的连接,并进行双向数据传输  
- 默认端口也是80和443，并且握手阶段采用 HTTP 协议  
- 可以发送文本，也可以发送二进制数据  
- 没有同源限制，客户端可以与任意服务器通信  
- 议标识符是ws（如果加密，则为wss），服务器网址就是 URL  
## 客户端
```js
// 初始化一个websocket对象
let ws = new WebSocket('ws://localhost:8080/echo');
// 建立web socket连接成功触发事件
ws.onopoen = function(){
    ws.send('发送数据');
    alert('数据发送中');
}
// 接收服务端数据时触发事件
ws.onmessage = function(evt){
    let received_msg = evt.data;
    alert('数据已接收');
}
ws.onclose = function(){
    alert('连接已关闭');
}

```
## 服务端(socket.io)
###### client api
```js
<script src="/socket.io/socket.io.js"></script>
let socket = io();
socket.on('connect',function(){
    // socket.broadcast.emit，这个方法是向除了自己外的所有人广播
    socket.on('message',function(){
        socket.broadcast.emit('message',{
            // ...
        })
        socket.on('change',function(data){})
        socket.emit('push',{
            name:'hehe'
        })
    });
});
socket.on('disconnect',function(){});
```

###### Server api
```js
// 服务端初始化io对象
const io = require('socket.io')();
// or
const Server = require('socket.io');
const io = new Server();

// node
const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection',client=>{
    client.on('event',data => {});
    client.on('disconnect',() => {});
});
server.listen(3000);

// express
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', () => { /* … */ });
server.listen(3000);

// koa
const app = require('koa')();
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);
io.on('connection', () => { /* … */ });
server.listen(3000);
```

```js
// 客户端
io.connect(url) //客户端连接上服务器端
socket.on('eventName', msg => {}) //客户端监听服务器端事件
socket.emit('eventName', msg) //客户端向服务器端发送数据
socket.disconnect() //客户端断开链接
// 服务端
socket.on('eventName', msg => {}) //服务器端监听客户端emit的事件，事件名称可以和客户端是重复的，但是并没有任何关联。socket.io内置了一些事件比如connection，disconnect，exit事件，业务中错误处理需要用到。
socket.emit('eventName', msg) //服务端各自的socket向各自的客户端发送数据
socket.broadcast('eventName', msg) //服务端向其他客户端发送消息，不包括自己的客户端
socket.join(channel) //创建一个频道（非常有用，尤其做分频道的时候，比如斗地主这种实时棋牌游戏）
io.sockets.in(channel) //加入一个频道
socket.broadcast.to(channel).emit('eventName', msg) //向一个频道发送消息，不包括自己
io.sockets.adapter.rooms //获取所有的频道
```
