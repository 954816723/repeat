let http = require('http');
let fs = require('fs');
let mysql = require('mysql');
// url 是对用户提交的路径进行解析
let url = require('url');
// qs 是对路径进行 json 化或者将 json 转换为 string 路径
let qs = require('querystring');

// mysql链接
let connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123123",
    database:"blog"
})
// 开始连接
connection.connect();

http.createServer((req,res)=>{
    // 设置cors跨域
    res.setHeader("Access-Control-Allow-Origin","*");
    // 设置header类型
    res.setHeader("Access-Control-Allow-Headers","Content-Type");
    // 跨域允许的请求方式
    res.setHeader("Content-Type","application/json")
    
    if (req.method == 'POST') {
        let pathname = req.url;
        let tempData = '';
        req.addListener('data',(chunk)=>{
            tempData += chunk;
        })
        req.addListener('end',()=>{
            // qs.parse()将url解析成对象形式
            // let result = JSON.stringify(qs.parse(tempData));
            let result = JSON.parse(tempData);
            if (pathname == '/register') {
                // result = JSON.parse(result);
                let username = result.name,
                    password = result.pass,
                    ctime = getNowFormatDate();
                let addSql = 'INSERT INTO user(user_name,user_password,c_time) value(?,?,?)',
                    addParams = [username,password,ctime];
                // 执行sql语句，异步操作
                connection.query(addSql,addParams,(error2,response2)=>{
                    if (error2) {
                        console.log(error2);
                        res.write(JSON.stringify({
                            code:'err',
                            message:"注册失败"
                        }))
                        res.end()
                    }else{
                        res.write(JSON.stringify({
                            code:'0',
                            message:"注册成功"
                        }))
                        res.end()
                    }
                })
                // connection.end();
            }else if(pathname == '/login'){
                let username = result.name,
                    password = result.pass;
                let sql = 'SELECT * FROM user WHERE user_name = ' + username;
                connection.query(sql,(err,data)=>{
                    if (err) {
                        res.write(JSON.stringify({
                            code:'err',
                            msg:"登录失败"
                        }))
                    }else{
                        // 返回结果是一个数组
                        // RowDataPacket {
                        //     id: 5,
                        //     user_name: '111',
                        //     user_password: '111',
                        //     c_time: 2018 - 12 - 26 T14: 08: 08.000 Z
                        // }
                        if (data.length == 0) {
                            res.end('不存在该用户')
                            return
                        }else{
                            if (data[0].uer_password == password) {
                                res.write(JSON.stringify({
                                    code:'0',
                                    msg:"登陆成功"
                                }))
                            }else{
                                res.write(JSON.stringify({
                                    code:'err',
                                    msg:"密码错误"
                                }))
                            }
                            res.end()
                        }
                    }
                })
            }else if(pathname == '/sendMessage'){

            }
        })
    }else if(req.method == 'GET'){
        let pathname = url.parse(req.url).pathname;
        if (pathname == '/getMessage') {
            
        }else if(pathname == '/'){
            
        }
    }else if(req.method == 'OPTIONS'){ //post请求浏览器会发送一次options请求
        res.statusCode = 200;
        res.end();
    }
}).listen(9000)

function getNowFormatDate() {
    var date = new Date();
    var year = date.getFullYear(); // 年
    var month = date.getMonth() + 1; // 月
    var strDate = date.getDate(); // 日
    var hour = date.getHours(); // 时
    var minute = date.getMinutes(); // 分
    var second = date.getMinutes(); // 秒
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    // 返回 yyyy-mm-dd hh:mm:ss 形式
    var currentdate = year + "-" + month + "-" + strDate + " " + hour + ":" + minute + ":" + second;
    return currentdate;
}
