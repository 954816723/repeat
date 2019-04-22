let http = require('http');
let path = require('path');
let url = require('url');
let fs = require('fs');
let mime = require('mime');
let zlib = require('zlib');
let {promisify} = require('util');
// 将一个异步方法转成一个promise方法
let stat = promisify(fs.stat);
// 客户端向服务器发起请求的时候,会通过Accept-Encoding告诉服务器我支持的解压缩格式
// Accept-Encoding:gzip,deflate
http.createServer(request).listen(8080);
async function request(req, res) {
    let {pathname} = url.parse(req.url);
    let filepath = path.join(__dirname,pathname);
    try {
        let statObj = await stat(filepath);
        res.setHeader('Content-Type',mime.getType(pathname));
        let acceptencoding = req.headers['accept-encoding'];
        // 内容协商
        if(acceptencoding){
            if(acceptencoding.match(/\bgzip\b/)){
                res.setHeader('Content-Encoding','gzip');
                fs.createReadStream(filepath).pipe(zlib.createGzip()).pipe(res);
            }else if(acceptencoding.match(/\bdeflate\b/)){
                res.setHeader('Content-Encoding','deflate')
                fs.createReadStream(filepath).pipe(zlib.createDeflate()).pipe(res);
            }else{
                fs.createReadStream(filepath).pipe(res);
            }
        }else{
            fs.createReadStream(filepath).pipe(res);
        }
    } catch (e) {
        res.statusCode = 404;
        res.end('Not Found');
    }
}