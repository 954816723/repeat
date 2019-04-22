// fork exec execFile都是基于spawn的改进方法
let {fork} = require('child_process');
let path = require('path');
let http = require('http');
//os.cups返回一个对象数据,包含每个逻辑cpu内核的信息
let os = require('os');

let server = http.createServer(function(req,res){
    res.setHeader('Content-Type','text/html;charset=utf8');
    res.end('请求在父进程被处理')
}).listen(8080);

for (let i = 0; i < os.cpus.length; i++) {
    let child = fork('fork.js', ['hehe'], {
        cwd: path.join(__dirname, 'test'),
        // 设置为true子进程不共享父进程的标准输入输出
        silent: true
    });
    child.on('message', function (msg) {
        console.log(msg);
    })
    child.send('server',server)
}