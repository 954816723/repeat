let http = require('http');
let fs = require('fs');
let url = require('url');
let path = require('path');
let mime = require('mime');
let crypto = require('crypto');

http.createServer(function(req,res){
    let {pathname} = url.parse(req.url);
    let filepath = path.join(__dirname,pathname);
    fs.stat(filepath,function(err,stat){
        if(err){
            sendError(req,res);
        }else{
            fs.readFile(filepath,(err,content)=>{
                let ifNoneMatch = req.headers['if-none-match'];
                let out = fs.createReadStream(filepath);
                let hash = crypto.createHash('md5');
                out.on('data',function(data){
                    hash.update(data);
                })
                out.on('end',function(){
                    let etag = hash.digest('hex');
                    if(ifNoneMatch == etag){
                        res.writeHead(304);
                        res.end();
                    }else{
                        send(req, res, filepath, etag);
                    }
                })
            })
        }
    })
}).listen(8080);
function sendError(req,res){
    res.statusCode = 404;
    res.end('Not Found');
}
function send(req, res, filepath, etag) {
    res.setHeader('Content-Type',mime.getType(filepath));
    res.setHeader('Etag', etag);
    fs.createReadStream(filepath).pipe(res);
}