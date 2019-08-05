const Koa = require('koa')
const app = new Koa()
// const bodyparser = require('koa-bodyparser')
const koaBody = require('koa-body')
const error = require('koa-json-error')
const parameter = require('koa-parameter')
const koaStatic = require('koa-static')
const routing = require('./routes/index')
const mongoose = require('mongoose')
const path = require('path')
const {MONGODB_ADDR} = require('./conf/config')

mongoose.connect(MONGODB_ADDR,{ useNewUrlParser: true },() => console.log('MongoDB 连接成功'))
mongoose.connection.on('error',console.error)

app.use(koaStatic(path.join(__dirname,'public')))

app.use(error({
    postFormat:(err,{stack,...rest}) => process.env.NODE_ENV === 'production' ? rest : {stack,...rest}
}))
app.use(koaBody({
    multipart:true,
    formidable:{
        uploadDir:path.join(__dirname,'/public/uploads'),
        keepExtensions:true
    }
}))
app.use(parameter(app))
routing(app)

app.listen(3000,() => console.log('程序启动在 3000 端口'))