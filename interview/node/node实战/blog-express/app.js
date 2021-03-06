var createError = require('http-errors');
var express = require('express');
var path = require('path');
var fs = require('fs');
// 解析cookie
var cookieParser = require('cookie-parser');
// 记录日志
var logger = require('morgan');
// 引入路由
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
const blogRouter = require('./routes/blog');
const userRouter = require('./routes/user');
const session = require('express-session');
const redisStore = require('connect-redis')(session);
const redisClient = require('./db/redis');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// 日志
const ENV = process.env.NODE_ENV;
if(ENV !== 'production'){
  app.use(logger('dev'));
}else{
  let logPath = path.join(__dirname,'logs','access.log');
  let writeStream = fs.createWriteStream(logPath,{flag:'a'});

  app.use(logger('combined',{
    stream:writeStream
  }))
}
// 处理post请求(json格式),挂载到req.body上
app.use(express.json());
// 处理post数据其他格式
app.use(express.urlencoded({ extended: false }));
// 解析cookie
app.use(cookieParser());
// 设置静态文件目录
// app.use(express.static(path.join(__dirname, 'public')));

const sessionStore = new redisStore({
  client:redisClient
})
app.use(session({
  secret:"miyao_123",
  cookie:{
    path:'/', //默认配置
    httpOnly:true,  //默认配置
    maxAge:24*60*60*1000
  },
  store:sessionStore
}))

// 注册路由
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/api/blog', blogRouter);
app.use('/api/user', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
