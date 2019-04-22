let http = require('http');
let options = {
    host:'localhost',
    port:8080,
    method:'POST',
    headers:{
        "Content-Type":"application/x-www-form-urlencoded"
    }
}
// 请求并没有真正的发出,req也是一个流对象,它是一个可写流
let req = http.request(options);
// 当服务器把请求体发回来的时候,或者客户端收到服务器响应的时候触发
req.on('response',function(res){
    console.log(res.statusCode);
    console.log(res.headers);
    let result = [];
    res.on('data',function(data){
        result.push(data);
    });
    res.on('end',function(){
        let str = Buffer.concat(result);
        console.log(str);
    })
});
// write向请求体里写数据
req.write('name=hehe');
// 结束写入请求体,只有在调用end的时候才会真正向服务器发请求
req.end();