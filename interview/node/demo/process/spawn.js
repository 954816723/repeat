let {spawn} = require('child_process');
let path = require('path');
let fs = require('fs');

let fd = fs.openSync(path.join(__dirname,'msg.txt'),'w',0o666);
let p1 = spawn('node',['test1.js'],{
    cwd:path.join(__dirname,'test'),
    stdio:['ipc',fd,'ignore'],
    // 默认情况下父进程要等待所有子进程全部完成退出后才能退出
    // 设置detached为true,子进程就可以脱离父进程单独存在
    detached:true
})
p1.on('message',function(msg){
    console.log(msg);
})
// p1.send('hello');

// unref 让父进程先退出,子进程继续运行
p1.unref()