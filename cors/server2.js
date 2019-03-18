let express = require('express');
let app = express();
//设置请求白名单
let whiteList = ['http://localhost:3000'];
app.use(function(req,res,next){
    let origin = req.headers.origin;
    if(whiteList.includes(origin)){
        // 允许哪个源可以访问我
        // 如果设置为 * 则不能携带凭证
        res.setHeader('Access-Control-Allow-Origin',origin);
        //允许携带哪个头访问我
        res.setHeader('Access-Control-Allow-Headers','name');
        // 允许哪个方法访问我
        res.setHeader('Access-Control-Allow-Methods','PUT');
        // 预检的存活时间
        res.setHeader('Access-Control-Max-Age',6);
        // 允许携带cookie
        res.setHeader('Access-Control-Allow-Credentials',true);
        // 允许返回的头
        res.setHeader('Access-Control-Expose-Headers','name');
        if(req.method === 'OPTIONS'){
            res.end();
            return;
        }
    }
    next();
});
app.put('/getData',(req,res)=>{
    console.log(req.headers);
    res.setHeader('name','zeze')
    res.end('hehe') 
})
app.get('/getData',(req,res)=>{
    console.log(req.headers);
    res.end('hehe') 
})
    
app.use(express.static(__dirname));
app.listen(4000); 