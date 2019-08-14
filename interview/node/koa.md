## 中间件
####  koa-router  路由  
```js
// route.js
const router = require('koa-router')()
router.prefix('/api/blog')
router.get('/list',async function(ctx,next){
    // xxx
})
module.exports = router
// app.js
const Koa = require('koa')
const app = new Koa()
const route = require(`./route.js`)
app.use(route.routes(),route.allowedMethods())
```

####  koa-bodyparser 解析请求体 只支持json跟form等格式,不支持文件格式  
```js
const bodyparser = require('koa-bodyparser')
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
```

####  koa-body  支持文件格式  
```js
const koaBody = require('koa-body')
app.use(koaBody({
    multipart:true,
    formidable:{
        uploadDir:path.join(__dirname,'/public/uploads'),
        keepExtensions:true
    }
}))
```

####  koa-json-error 错误处理 400 404错误也返回json 可设置生产环境下禁止错误堆栈的返回  
```js
const error = require('koa-json-error')
// 在生产环境下不返回错误堆栈信息
app.use(error({
    postFormat:(err,{stack,...rest}) => process.env.NODE_ENV === 'production' ? rest : {stack,...rest}
}))
```

####  koa-parameter 检验参数  
```js
// app.js
const parameter = require('koa-parameter')
app.use(parameter(app)) // 在全局注册方法

//route.js
router.get('/',async create(ctx){
    // 检验参数
    ctx.verifyParams({
        content:{type:'string',required:true},
    })
    const answerer = ctx.state.user._id
    const questionId = ctx.params.questionId
    const answer = await new Answer({...ctx.request.body,answerer,questionId}).save()
    ctx.body = answer
}) 
```

####  koa-static 设置静态文件目录  
```js
const koaStatic = require('koa-static')
app.use(koaStatic(path.join(__dirname,'public')))

```

####  koa-jwt  使用JWT认证HTTP请求
```js
const jwt = require('koa-jwt')
const secret = 'zhihu-jwt-secret'
// 将解析后对象挂载到ctx.state.user上
const auth = jwt({secret})

```

#### jsonwebtoken 生成加密token
```js
const jsonwebtoken = require('jsonwebtoken')
const token = jsonwebtoken.sign({_id,name},secret,{expiresIn:'1d'})
```

####  koa-morgan  日志
```js
const morgan = require('koa-morgan')
const ENV = process.env.NODE_ENV;
if(ENV !== 'production'){
  app.use(morgan('dev'));
}else{
  let logPath = path.join(__dirname,'logs','access.log');
  let writeStream = fs.createWriteStream(logPath,{flag:'a'});

  app.use(morgan('combined',{
    stream:writeStream
  }))
}
```

####  koa-logger  提供输出请求日志的功能
```js
const logger = require('koa-logger')
app.use(logger())
```

####  koa-json  
```js
const json = require('koa-json')
app.use(json())
```

####  koa-convert  
`对于比较老的使用Generate函数的koa中间件(< koa2)，官方提供了一个灵活的工具可以将他们转为基于Promise的中间件供Koa2使用，同样也可以将新的基于Promise的中间件转为旧式的Generate中间件`  

####  koa-onerror  
```js
const onerror = require('koa-onerror')
onerror(app)
```

####  debug  日志工具

####  koa-views  进行视图模板渲染
```js
const views = require('koa-views')
app.use(views(__dirname + '/views', {
  extension: 'pug'
}))
```

####  pug  模版引擎

####  crosss-env  不同环境统一设置环境变量
```json
// package.json
  "scripts": {
    "start": "node bin/www",
    "dev": "cross-env NODE_ENV=development ./node_modules/.bin/nodemon bin/www",
    "prd": "cross-env NODE_ENV=production pm2 start bin/www"
  },
```

####  nodemon  自动重启node

####  pm2  node进程管理工具
`见pm.md`  

####  koa-generic-session  
```js
const session = require('koa-generic-session')
const redisStore = require('koa-redis')
const {REDIS_CONF} = require('./conf/db')

app.keys = ['miyao_123_']
app.use(session({
  // 配置cookie
  cookie:{
    path:'/',
    httpOnly:true,
    maxAge:24*60*60*1000
  },
  // 配置redis
  store:redisStore({
    all:`${REDIS_CONF.host}:${REDIS_CONF.port}`
  })
}))
```

####  mongoose  连接mongoDB
```js
// app.js
const mongoose = require('mongoose')
const MONGODB_ADDR = 'mongodb+srv://chen:chenwei19921020@mongodb-nxddx.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(MONGODB_ADDR,{ useNewUrlParser: true },() => console.log('MongoDB 连接成功'))
mongoose.connection.on('error',console.error)
// user.js  设计Sechma
const mongoose = require('mongoose')
const {Schema,model} = mongoose
const userSchema = new Schema({
    __v:{type:String,select:false},
    name: {type:String,required:true},
    password: {type:String,required:true,select:false},
    gender:{type:String,enum:['male','female'],default:'male'},
    headline:{type:String},
    locations:{type:[{type:Schema.Types.ObjectId,ref:'Topic'}],select:false},
    educations:{
        type:[{
            school:{type:Schema.Types.ObjectId,ref:'Topic'},
            diploma:{type:Number,enum:[1,2,3,4,5]},
            entrance_year:{type:Number},
        }],
        select:false
    }
},{timestamps:true})
module.exports = model('User',userSchema)
// controller.js 
const User = require('../models/users')
router.get('/',async (ctx,next) => {
    const {per_page = 10} = ctx.query
    const page = Math.max(ctx.query.page * 1,1) - 1
    const perPage = Math.max(per_page * 1,1)
    ctx.body = await User
        .find({name:new RegExp(ctx.query.q)})
        .limit(perPage)
        .skip(page * perPage)
})

```

####  koa-redis  连接redis

####  mysql  连接mysql
```js
const mysql = require('mysql');
const {MYSQL_CONF} = require('../conf/db');
// 创建连接
const con = mysql.createConnection(MYSQL_CONF);
// 开始连接
con.connect();
// 统一执行sql的函数
function exec(sql){
    const promise = new Promise((resolve,reject)=>{
        con.query(sql,(err,result)=>{
            if(err){
                reject(err);
                return;
            }
            resolve(result)
        })
    })
    return promise;
}
// escape 防止sql注入
module.exports = {
    exec,
    escape:mysql.escape
}
```

####  xss  防止xss攻击
```js
const xss = require('xss');
let title = xss(req.title)
```


#### mongoDB
<!-- mongodb+srv://chen:<password>@mongodb-nxddx.mongodb.net/test?retryWrites=true&w=majority -->