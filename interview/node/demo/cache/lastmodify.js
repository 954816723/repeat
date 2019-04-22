/**
 * 对比缓存
 * 1.第一次访问服务器的时候,服务器返回资源和缓存的标识,客户端会将资源缓存在本地的缓存数据库中
 * 2.第二次客户端需要此数据时,取得缓存标识,然后去询问服务器是否是最新的
 * 3.如果是最新的就直接使用缓存数据,如果不是则服务器返回新的资源和缓存标识,客户端根据新的缓存标识缓存新的数据
 */
let http = require('http');
let fs = require('fs');
let path = require('path');
let url = require('url');
let mime = require('mime');
http.createServer(function(req,res){
    let {pathname} = url.parse(req.url);
    let filepath = path.join(__dirname,pathname);
    fs.stat(filepath,function(err,stat){
        if(err){
            sendError(req,res);
        }else{
            // 通过最后修改时间来判断缓存是否有用
            let ifModifiedSince = req.headers['if-modified-since'];
            let ctime = stat.ctime.toGMTString();
            if(ifModifiedSince == ctime){
                res.writeHead(304);
                res.end();
            }else{
                send(req, res, filepath, stat);
            }
        }
    })
}).listen(8080);
function sendError(req,res) {
    res.end('Not Found');
}
function send(req, res, filepath, stat) {
    res.setHeader('Content-Type', mime.getType(filepath));
    // 发给客户端后,客户端会将此时间缓存下来,下次在获取资源的时候会将发回给服务器
    res.setHeader('Last-Modified',stat.ctime.toGMTString());
    fs.createReadStream(filepath).pipe(res);
}