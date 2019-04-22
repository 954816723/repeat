// -d/--root 静态文件目录 -o/--host 主机  -p/--port 端口号
let yargs = require('yargs');
let Server = require('../src/app');
let argv = yargs.option('d',{
    alias:'root',
    demand:false,
    type:String,
    default:process.cwd(),
    description:'静态文件根目录'
}).option('o',{
    alias:'host',
    demand:false,
    type:String,
    default:'localhost',
    description: '请配置监听的主机'
}).option('p',{
    alias:'port',
    demand:false,
    type:Number,
    default:8080,
    description:'请配置端口号'
}).usage('server [options]')
.example('server -d / -o localhost -p 8080')
.help('h').argv;

let server = new Server(argv); 
server.start();