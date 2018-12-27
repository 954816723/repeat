let http = require('http');
let fs = require('fs');
let url = require('url');
let path = require('path');

http.createServer((req,res)=>{
    let pathName = url.parse(req.url).pathname;
    let extName = path.extname(pathName);
    if (pathName === '/') {
        pathName = 'index.html'
    }
    if (req.url !== '/favicon.ico') {
        fs.readFile('upload/'+pathName,(err,data)=>{
            if (err) {
                console.log(err);
                return false;
            }else{
                let ext = getExt(extName);
                res.writeHead(200,{'Content-Type':ext+";charset=utf-8"});
                res.write(data);
                res.end()
            }
        })
    }
    
}).listen(9000)

function getExt(ext){
    switch(ext){
        case '.html':
            return 'text/html';
        case '.js':
            return 'text/js';
        case '.css':
            return 'text/css';
        default :
            return 'text/html'
    }
}
