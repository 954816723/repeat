/**
 * 静态文件服务器
 * 1.显示目录下文件列表和返回内容
 * 2.实现压缩
 * 3.实现缓存
 */

// 在JS中添加环境变量
process.env.DEBUG='static:*';
let config = require('./config');
let http = require('http');
let path = require('path');
let fs= require('fs');
let url = require('url');
let mime = require('mime');
// 压缩
let zlib = require('zlib');
// 加密
let crypto = require('crypto');
// js模板渲染引擎
let handlebars = require('handlebars');
let {promisify,inspect} = require('util');
let stat = promisify(fs.stat);
let readdir = promisify(fs.readdir);
// 设置控制台输出颜色
let chalk = require('chalk');
// 是一个在控制台输出的模块
// 每个debug实例都有一个名字,是否打印取决于环境变量中DEBUG值是否等于static:app
// set DEBUG=static:app
// export DEBUG=static:app
let debug = require('debug')('static:app');

//编译模板,得到一个渲染的方法,然后传入实际数据
function list(){
    let tmp = fs.readFileSync(path.resolve(__dirname,'template','list.html'),'utf8');
    return handlebars.compile(tmp);
}

class Server{
    constructor(argv){
        this.list = list();
        this.config = Object.assign({},config,argv);
    }
    start(){
        let server = http.createServer();
        server.on('request',this.request.bind(this));
        server.listen(this.config.port, () => {
            let url = `http://${this.config.host}:${this.config.port}`;
            debug(`server started at ${chalk.green(url)}`);
        });
    }
    async request(req,res){
        let {pathname} = url.parse(req.url);
        if(pathname === '/favicon.ico') return;
        let filepath = path.join(this.config.root, pathname);
        try {
            let statObj = await stat(filepath);
            if (statObj.isDirectory()) {//如果是目录
                let files = await readdir(filepath);
                files = files.map(file=>({
                    name:file,
                    url:path.join(pathname,file)
                }))
                // files = files.map(file=>{
                //     return {
                //         name:file,
                //         url:path.join(pathname,file)
                //     }
                // })
                let html = this.list({
                    title:pathname,
                    files
                });
                res.setHeader('Content-Type','text/html');
                res.end(html);
            }else{
                this.sendFile(req,res,filepath,statObj)
            }
        } catch (e) {
            debug(inspect(e));//inspect将一个对象转为字符串
            this.sendError(req,res);
        }
    }
    async sendFile(req,res,filepath,statObj){
        if (await this.handleCache(req, res, filepath, statObj)) return;
        res.setHeader('Content-Type',mime.getType(filepath)+';charset=utf8');
        let encoding = this.getEncoding(req, res);
        if (encoding) {
            fs.createReadStream(filepath).pipe(encoding).pipe(res);
        }else{
            fs.createReadStream(filepath).pipe(res);
        }
    }
    sendError(req,res){
        res.statusCode = 500;
        res.end('something wrong');
    }
    getEncoding(req,res){
        let acceptEncoding = req.headers['accept-encoding'];
        if (/\bgzip\b/.test(acceptEncoding)) {
            res.setHeader('Content-Encoding','gzip');
            return zlib.createGzip();
        }else if(/\bdeflate\b/){
            res.setHeader('Content-Encoding', 'deflate');
            return zlib.createDeflate();
        }else{
            return null;
        }
    }
    handleCache(req,res,filepath,statObj){
        res.setHeader('Cache-Control','private,max-age=30');
        res.setHeader('Expries',new Date(Date.now()+30*1000).toGMTString());
        let ifModifiedSince = req.headers['if-modified-since'];
        let ifNoneMatch = req.headers['if-None-Match'];
        let lastModified = statObj.ctime.toGMTString();
        let rs = fs.createReadStream(filepath);
        let hash = crypto.createHash('md5');
        rs.on('data',function(data){
            hash.update(data);
        })
        // 异步
        rs.on('end',function(){
            let etag = hash.digest('hex');
            res.setHeader('ETag', etag);
            res.setHeader('Last-Modified',lastModified);
            if (ifNoneMatch && ifNoneMatch !=etag) {
                return false;
            }
            if(ifModifiedSince && ifModifiedSince != lastModified){
                return false;
            }
            if(ifNoneMatch || ifModifiedSince){
                res.writeHead(304);
                res.end();
                return true;
            }else{
                return false;
            }
        })
    }
}
// let server = new Server();
// server.start();
module.exports = Server;