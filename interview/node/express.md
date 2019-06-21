## Api
> `let express = require('express')`
> `lett app = express()`
###### express
`express.json([options])`  
> 此方法支持Express4.16.0及以后的版本,用于取代`body-parser`  
基于`body-parser`用以解析传入的请求为JSON格式  
本函数返回只解析JSON的中间件  
`express.static(root,[options])`  
Express内置中间件,基于`serve-static`构建,用于提供静态文件  
> 使用反向代理缓存可以提高静态文件服务器的效率  
`root`参数指定提供将静态文件的根目录  
服务器拼合`req.url`和所提供的根目录来查找静态文件,没有找到不会返回404,而将调用`next()`以执行下一个中间件  
`express.Router([options])`  
创建一个新的`router`对象  
`express.urlencoded`  
> 此方法支持Express4.16.0及以后的版本  
基于`body-parser`解析传入的请求为`urlencoded`格式  
###### Application
- Properties  
`app.locals`  
是一个对象,以app内部的各变量为属性  
一旦设置,`app.locals`属性将在整个应用的生命周期内有效  
相比而言`res.lcoals`的属性值只在某请求的生命周期内有效  
`app.mountpath`  
表示某`sub-app`所匹配的一个或多个路径模式  
> `sub-app`指的是用于处理对路由的请求的express的实例  
- Events   
`app.on('mount',callback(parent))`  
`mount`事件在`sub-app`挂载到父app时触发,父app会当作参数传入回调函数中  
- Methods  
`app.all(path,callback[,callback])`  
此方法类似标准的`app.METHOD()`方法,不同的地方在于它将匹配所有类型的http请求  
`app.delete(path,callback[,callback])`  
为某路径的HTTP DELETE请求绑定特定的回调函数  
`app.disable(name)`  
设置`setting`中的布尔值属性`name`的值为`false`，`name`是`app settings`表中的值为布尔型的项  
调用`app.set('foo',false)`和调用`app.disable('foo')`的效果一致  
`app.disabled(name)`  
判断`setting`中的设置项`name`的值是否为`false`
`app.enable(name)`  
设置`setting`中的布尔值设置项`name`为`true`
`app.enabled(name)`  
判断`setting`中的设置项`name`的值是否为`true`
`app.engine(ext,callback)`  
注册`ext`格式的模版的回调函数为`callback`  
默认情况下,Expresss会基于拓展名`require()`引擎,并缓存`require()`以提高性能  
> `app.engine('pug',require('pub'),__express)`
对不提供直接可用的.__express的引擎，或者你想把不同的后缀映射到当前引擎可以使用下述方法  
> `app.engine('html', require('ejs').renderFile);`
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
- Methods  
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