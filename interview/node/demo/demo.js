let fs = require('fs');
let path = require('path');


// copy
const BUFFER_SIZE = 3;
function copy(src,target){
    fs.open(src,'r',0o666,function(err,Rfd){
        if(err) console.log(err);
        fs.open(target,'w',0o666,function(err,Wfd){
            if(err) console.log(err);
            !(function next(){
                let buffer = Buffer.alloc(BUFFER_SIZE);
                fs.read(Rfd, buffer, 0, BUFFER_SIZE, null, function (err, bytesRead, buffer) {
                    if (err) console.log(err);
                    if(bytesRead>0){
                        fs.write(Wfd, buffer, 0, bytesRead,null,next);
                    }
                });
            })()
        })
    })
}
// copy('1.txt','2.txt')

// 递归创建目录
function mkdirp(dir){
    let source = dir.split('/');//[a,b,c]
    !(function next(index){
        if(index > source.length) return;
        let path = source.slice(0,index).join('/');
        fs.access(path,fs.constants.R_OK,function(err){
            if(err){
                fs.mkdir(path, 0o666, () => next(index + 1))
            }else{
                next(index+1);
            }
        })
    })(1)
}
// mkdirp('a/b/c')

// 异步递归删除非空目录
function rmDirp(dir){
    return new Promise(function(resolve,reject){
        fs.stat(dir,(err,stat)=>{
            if(err) reject(err);
            if (stat.isDirectory()) {
                fs.readdir(dir, (err, files) => {
                    if (err) reject(err);
                    Promise.all(files.map(file => rmDirp(path.join(dir, file)))).then(() => {
                        fs.rmdir(dir, resolve)
                    })
                })
            }else{
                fs.unlink(dir,resolve);
            }
        })
    })
}
rmDirp('b').then(data=>{
    console.log(data);
});
// fs.rmdir('a',function(err){
//     console.log(err);
    
// })