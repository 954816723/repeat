## 中间件
###### express.static
- 静态文件中间件  
```js
let express = require('express');
let path = require('path');
let http = require('http');
let app = express();
let publicPath = path.resolve(__diranamem,'public');
app.use(express.static(publicPath));
app.use(function(request,response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.end("not found");
});
http.createServer(app).listen(3000);
```
###### MORGAN
- 日志记录中间件  
```js
var logger = require("morgan");
var app = express();
app.use(logger("short")); 
```
###### cookie-parses
- 解析浏览器中的 cookie 信息  
###### helmet 
- 添加 HTTP 头部信息来应对一些网络攻击  
###### connect-ratelimit
- 控制每小时的连接数  