// exev同步执行一个shell命令
let {exec} = require('child_process');
let path = require('path');

let p1 = exec('node exec.js a b c',{maxBuffer:1024*1024,encoding:'utf8',cwd:path.join(__dirname,'test')},function(err,stdout,stdin){
    console.log(err);
    console.log(stdout)
})
// 向子进程发送一个信号 SIGTERM
// p1.kill()