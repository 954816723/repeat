// 引入http模块
let http = require('http');
// 引入url模块
let url = require('url');
// 引入文件模块
let fs = require('fs');
// 创建一个http服务
// http.createServer((req,res)=>{
//     // 设置请求头,状态码200,文件类型html,字符集utf-8
//     res.writeHead(200,{
//         "Content-Type":"text/html;charset=utf-8"
//     });
//     console.log(req.url);
//     // url.parse 获取地址信息
//     // url.resolve 追加或者替换地址
//     // url.format 逆向parse
//     if (req.url !== '/favicon.ico') {
//         let result = url.parse(req.url,true);
//         console.log(result);
//         // 读取文件
//         fs.stat('demo.txt', (err, stats) => {
//             console.log(err);
            
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(stats.isFile());
//             }
//         })
//     }

//     // 往页面打印值
//     res.write('<h1>Hello Node<h1>');
//     // 结束响应
//     res.end();
// }).listen(3000) //监听3000端口

fs.stat('upload',(err,stats)=>{
    if (err) {
        fs.mkdir('upload',(err)=>{
            if (err) {
                console.log(err);
                return false;
            }else{
                console.log('upload目录创建成功');
            }
        })
    }else{
        console.log(stats.isDirectory());
        console.log('有upload目录');
    }
})
// 递归读取目录
fs.readdir('demo',(err,files)=>{
    if (err) {
        console.log(err);
        return false;   
    }else{
        let arrFiles = [];
        console.log(files);
        
        (function getFile(i){
            if (i == files.length) {
                console.log(arrFiles);
                return false;
            }
            fs.stat('demo/'+files[i],(err,stats)=>{
                if (stats.isDirectory()) {
                    arrFiles.push(files[i])
                }
                getFile(i+1);
            })
        })(0)
    }
})