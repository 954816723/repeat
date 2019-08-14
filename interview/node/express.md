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
返回`app setting`中相关属性`name`的值
`app.get(path,callback[,callback])`  
使用特定的回调函数处理特定路径的`HTTP GET`请求  
`app.listen(path, [callback])`  
启动UNIX套接字并侦听指定路径上的连接,此方法等同于Node的`http.Server.listen()`  
`app.listen([port[, host[, backlog]]][, callback])`  
绑定并监听对指定的host和端口的连接,此方法和Node的`http.Server.listen()`方法一致   
```js
var express = require('express');
var https = require('https');
var http = require('http');
var app = express();

http.createServer(app).listen(80);
https.createServer(options, app).listen(443);
```
`app.METHOD()`  
根据请求的类型处理http请求,请求类型可以是`GET,PUT,POST`等的小写模式  
`app.param([name],callback)`  
为路由的参数添加回调函数  
`app.path()`  
返回应用程序的规范路径,一个字符串  
`app.post()`  
绑定针对某特定路径的`HTTP POST`请求到特定的回调函数上  
`app.put()`  
绑定针对某特定路径的`HTTP PUT`请求到特定的回调函数上  
`app.render(view,[locals],callback)`  
通过回调函数返回某个视图对应渲染出的HTML  
`app.route()`  
返回单一的路由实例,可以链式的为不同的请求绑定不同的中间件处理函数  
避免重复的写路由名及由此造成的输入错误  
`app.set(name,value)`  
设置setting中的属性name的值为value
`app.use([path],callback[,callback])`  
为指定的路径指定中间件函数,当请求的路径与之匹配时,中间件函数将会被执行  
中间件函数将会按照顺序执行，因此中间件的顺序非常重要  
`错误处理中间件`  
错误处中间件必须接受四个参数,使用时必须传入四个参数以证明当前中间件是错误处理中间件  
> `(err,req,res,next)`

- 路径写法示例  
> `type:path / 路径通配符 / 正则表达式 / 数组`

###### Request
> `在Express4中，req.files默认不再存在于req对象中`

- Properties  
`req.app`  
此属性指向使用当前中间件的Express allication  
`req.baseUrl`  
返回一个路由器实例所匹配的路径  
`req.body`  
包含从`request body`中提交而来的键值对形式的数据  
默认情况下,`req.body`的值为`undefined`,需要使用`body-parser`或`multer`这类body解析中间件来填充内容  
```js
var app = require('express')();
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/profile', upload.array(), function (req, res, next) {
  console.log(req.body);
  res.json(req.body);
});
```
`req.cookies`  
当使用`cookie-parser`中间件时,此属性由请求中的cookie信息构建的对象  
`req.fresh`  
用以表征当前请求是否“新鲜”  
`req.hostname`  
用以表征从HTTP header派生出来的主机名  
`req.ip`  
用以表征请求的远程ip  
`req.ips`  
`req.method`  
包含一个对应于当前请求方法的字符串，如GET,POST,PUT等等  
`req.originalUrl`  
此属性非常类似于`req.url`，不同之处在于，它保留了原始请求URL，允许你为内部路由重写`req.url`  
在中间件函数中，`req.originalUrl`是`req.baseUrl`和`req.path`的组合
`req.params`  
此属性是一个映射到命名路由参数的对象。比如你的路由为`/user/:name`,那么可以通过`req.params.name`获取到name属性的值，此对象默认值为{}
`req.path`  
表示请求URL的路径部分  
`req.protocol`  
表征请求协议的字符串，可能是http或https  
`req.query`  
此属性通过解析查询字符串而生产的对象。如果没有查询字符串，则为空对象{}  
`req.route`  
返回一个对象，表示当前匹配的路由  
`req.secure`  
表征TLS连接是否建立的布尔值，等同于:`'https' == req.protocol;`  
`req.signedCookies`  
当使用了`cookie-parser`中间件时，此属性包含请求带来的签名cookies  
普通的cookie可通过req.cookie访问，但是容易被伪造存在恶意攻击的风险  
`req.stale`  
表征此请求是否是过时，此属性是`req.fresh`的对立面  
`req.subdomains`  
表征请求域名的子域名构成的数组  
`req.xhr`  
是一个布尔值，如果请求头的`X-Requested-With`为`XMLHttpRequest`,则为true,表明该请求由一个类似jQuery的客户端库发起  
- Methods  
`req.accepts()`  
检测指定的内容类型是否被接受,结果基于HTTP中的Accept请求头  
`req.acceptsCharsets()`  
返回指定的字符集中第一个匹配的字符集，此结果基于`Accept-Charset`请求头  
`req.acceptsEncodings()`  
返回指定的编码集中的第一个匹配的编码，结果基于`Accept-Encoding`请求头  
`req.acceptsLanguages()`  
返回匹配到的第一种语言，结果基于`Accept-Language`请求头
`req.get()`  
获取请求头中对应项的值（大小写不敏感）  
`req.is(type)`  
如果传入请求的`“Content-Type”`HTTP头字段与type参数指定的MIME类型匹配，则返回匹配的内容类型。否则返回false  
`req.param()`  
已弃用  
`req.range()`  
###### Response
- Properties  
`res.app`  
指向使用该中间件的express实例，在请求对象中 `req.app` 和 `res.app`一样  
`res.headersSent`  
是一个布尔值，指示app是否为响应发送了`HTTP headers`  
`res.locals`  
表示包含在请求生命周期内的本地变量  
- Methods  
`res.append()`  
> `在Express4.11.0以上版本中被支持`  

添加指定值到HTTP响应头中，如果header不存在，则依据指定的值创建该头，值可以是字符串或者数组  
`res.attachment([filename])`  
设置HTTP响应头`Content-Disposition`为`attachment`,如果指定了filename,则会依据filename的后缀通过`res.type()`设置`Content-Type`,同时会设置`Content-Disposition “filename=”`部分
`res.cookie(name, value [, options])`  
设置cookie name的值为value  
`res.clearCookie(name[,options])`  
清除名称为name的cookie  
`res.download(path [, filename] [, options] [, fn])`  
附件在路径中传输文件  
`res.end()`  
用于结束响应过程  
`res.format()`  
如果请求对象中存在的Accept HTTP头，可触发内容协商
`res.get(field)`  
依据指定的field,返回指定的HTTP 响应头对应的值，field大小写不敏感  
`res.json([body])`  
发送一个JSON响应，此方法将使用正常的内容类型发送响应，参数将通过JSON.stringify()转换为JSON字符串  
`res.jsonp()`  
使用JSONP发送JSON响应，除了支持JSONP回调，此方法与res.json()相同  
`res.links(links)`  
把参数添加到HTTP 响应头 Link 中  
`res.location(path)`  
设置响应头Location为指定的值  
`res.redirect([status,] path)`  
依据指定的路径和状态（一个对应于HTTP状态码的正整数）重定向URL，如果没有指定，默认值为`302 Found`  
`res.render()`  
渲染视图并发送渲染得到的html字符串到客户端  
`res.send([body])`  
发送Http响应  
`res.sendFile(path [, options] [, fn])`  
> `在Express4.8.0之后的版本中被支持`

基于给定的路径传输文件，并依据文件的拓展名设置响应头的`Content-Type`  
`res.sendStatus(statusCode)`  
设置HTTP响应的状态码为statusCode,并且在响应body中添加它的字符串表示  
`res.set(field [, value])`  
设置响应头对应的field为value,此方法也支持同时设置多个`field`为对应的值  
`res.status(code)`  
设置响应的HTTP状态码，它可以看做一个可链式调用的`response.statusCode`  
`res.type(type)`  
设置`Content-Type`为对应的MIME类型，如果type中包含/,将会设置Content-Type为传入的type
`res.vary(field)`  
如果不存在添加该字段到Vary响应头中  
###### Router
- Methods  
`router.all(path, [callback, ...] callback)`  
此方法类似标准的`router.MEYHOD()`方法，不同的地方在于它将匹配所有的http请求  
`router.METHOD(path, [callback, ...] callback)`  
依据请求的类型处理http请求，请求类型可以是GET,PUT,POST等等的小写模式  
`router.param(name, callback)`  
为路由参数添加回调函数，其中name是参数名或参数组成的数组，callback是回调函数  
`router.route(path)`  
返回单一路由的实例，你可以使用不同的可选中间件来处理不同类型的请求  
```js
var router = express.Router();

router.param('user_id', function(req, res, next, id) {
  // sample user, would actually fetch from DB, etc...
  req.user = {
    id: id,
    name: 'TJ'
  };
  next();
});

router.route('/users/:user_id')
.all(function(req, res, next) {
  // runs for all HTTP verbs first
  // think of it as route specific middleware!
  next();
})
.get(function(req, res, next) {
  res.json(req.user);
});
```
`router.use([path], [function, ...] function)`  
为可选的path添加一系列的处理函数，path默认值为/  

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
###### cookie-parser
- 解析浏览器中的 cookie 信息  
###### body-parser
- 请求体解析中间件  
###### helmet 
- 添加 HTTP 头部信息来应对一些网络攻击  
###### connect-ratelimit
- 控制每小时的连接数  
###### archiver
- 打包模块  
###### co
- 以同步形式编写异步代码的模块  
###### compression
- 压缩请求,gzip压缩  
###### connect-timeout
- 处理超时连接  
###### debug
- 日志工具
###### express-session
###### fdfs
###### glob
###### hbs
###### images
###### jr-qrcode
###### lodash
###### log4js
###### md5
###### md5-file
###### moment
###### multiparty
###### mysql
###### connect-redis
###### passport
###### passport-weixin
###### qr-image
###### request-promise
###### semver
###### sequelize
###### serve-favicon
###### session.socket.io
###### socket.io
###### string
###### striptags
###### svg2png
###### text-to-svg
###### type-is
###### uuid

###### captchapng
###### chai
###### chalk
###### chromedriver
###### codemirror
###### connect-history-api-fallback
###### cross-spawn
###### eventsource-polyfill
###### function-bind
###### lolex
###### mocha
###### nightwatch
###### opn
###### ora
###### phantomjs-prebuilt
###### queuedo
###### selenium-server
###### semver
###### shelljs
###### summernote

###### http-proxy-middleware
###### webpack
###### webpack-dev-middleware
###### webpack-hot-middleware
###### webpack-merge
###### url-loader
###### json-loader
###### inject-loader
###### isparta-loader
###### css-loader
###### html-webpack-plugin
###### extract-text-webpack-plugin

###### babel-core
###### babel-eslint
###### babel-loader
###### babel-plugin-transform-runtime
###### babel-preset-es2015
###### babel-preset-stage-2
###### babel-register

###### eslint
###### eslint-config-standard
###### eslint-friendly-formatter
###### eslint-loader
###### eslint-plugin-html
###### eslint-plugin-promise
###### eslint-plugin-standard

