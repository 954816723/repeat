## Api
> `let express = require('express')`
> `lett app = express()`
###### express
`express.static(root,[options])`
`express.static()`
`express.Router()`
`express.urlencoded`
###### Application
- properties  
`app.locals`
`app.mountpath`
- events  
`app.mount`
- methods  
`app.all()`
`app.delete()`
`app.disable()`
`app.disabled()`
`app.enable()`
`app.enabled()`
`app.engine()`
`app.get(name)`
`app.get(path,callback[,callback])`
`app.listen()`
`app.METHOD()`
`app.param()`
`app.path()`
`app.post()`
`app.put()`
`app.render()`
`app.route()`
`app.set()`
`app.use()`
###### Request
- Properties  
`req.app`
`req.baseUrl`
`req.body`
`req.cookies`
`req.fresh`
`req.hostname`
`req.ip`
`req.ips`
`req.method`
`req.originalUrl`
`req.params`
`req.path`
`req.protocol`
`req.query`
`req.route`
`req.secure`
`req.signedCookies`
`req.stale`
`req.subdomains`
`req.xhr`
- methods  
`req.accepts()`
`req.acceptsCharsets()`
`req.acceptsEncodings()`
`req.acceptsLanguages()`
`req.get()`
`req.is()`
`req.param()`
`req.range()`
###### Response
- Properties  
`res.app`
`res.headersSent`
`res.locals`
- Methods  
`res.append()`
`res.attachment()`
`res.cookie()`
`res.clearCookie()`
`res.download()`
`res.end()`
`res.format()`
`res.get()`
`res.json()`
`res.jsonp()`
`res.links()`
`res.location()`
`res.redirect()`
`res.render()`
`res.send()`
`res.sendFile()`
`res.sendStatus()`
`res.set()`
`res.status()`
`res.type()`
`res.vary()`
###### Router
- Methods  
`router.all()`
`router.METHOD()`
`router.param()`
`router.route()`
`router.use()`

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