let http = require('http');
let fs = require('fs');
let url = require('url');
let path = require('path');
let mime = require('mime');
let crypto = require('crypto');

http.createServer(function (req, res) {
    let {
        pathname
    } = url.parse(req.url);
    let filepath = path.join(__dirname, pathname);
    fs.stat(filepath, function (err, stat) {
        if (err) {
            sendError(req, res);
        } else {
            send(req,res,fileapth)
        }
    })
}).listen(8080);

function sendError(req, res) {
    res.statusCode = 404;
    res.end('Not Found');
}

function send(req, res, filepath) {
    res.setHeader('Content-Type', mime.getType(filepath));
    res.setHeader('Cache-Control', 'max-age=10');
    fs.createReadStream(filepath).pipe(res);
}