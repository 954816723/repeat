const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');
const querystring = require('querystring');
const {set,get} = require('./src/db/redis');
const {access} = require('./src/utils/log');

const setCookieExpires = () => {
    let date = new Date();
    date.setTime(date.getTime() + (24*60*60*1000));
    return date.toGMTString();
}

const getPostData = (req,res) => {
    let promise = new Promise((resolve,reject)=>{
        if(req.method !== 'POST'){
            resolve({});
            return
        }
        if(req.headers['content-type'] !== 'application/json'){
            resolve({});
            return
        }
        let postData = '';
        req.on('data',chunk=>{
            postData += chunk.toString();
        })
        req.on('end',()=>{
            if(!postData){
                resolve({});
                return;
            }
            resolve(
                JSON.stringify(postData)
            )
        })
    })
    return promise;
}

const app = (req,res) => {
    access(`${req.method} -- ${req.url} -- ${req.headers['user-agent']} -- ${Date.now()}`);
    let url = req.url;
    req.path = url.split('?')[0];
    let query = url.split('?')[1];
    req.query = querystring.parse(query)

    res.setHeader('Content-Type','application/json');

    // cookie
    req.cookie = {};
    const cookieStr = req.headers.cookie || '';
    cookieStr.split(';').forEach(item => {
        if(!item) return;
        let temp = item.split('=');
        req.cookie[temp[0].trim()] = temp[1].trim();
    })

    // session
    let userId = req.cookie.userid;
    let needSetCookie = false;
    if(!userId){
        needSetCookie = true;
        userId = `${Date.now()}_${Math.random()}`;
        set(userId,{});
    }
    req.sessionId = userId;
    get(req.sessionId).then(sessionData => {
        if(sessionData == null){
            set(req.sessionId,{});
            req.session = {};
        }else{
            req.session = sessionData;
        }
        return getPostData(req)
    }).then(postData=>{
        req.body = postData;
        
        let blogResult = handleBlogRouter(req,res);
        if(blogResult){
            blogResult.then(blogData=>{
                if(needSetCookie){
                    res.setHeader('Set-Cookie',`userid=${userId};path=/;httpOniy;expires=${setCookieExpires()}`)
                }
                res.end(
                    JSON.stringify(blogData)
                )
            })
            return
        }
        let userResult = handleUserRouter(req,res);
        if(userResult){
            userResult.then(userData=>{
                if(needSetCookie){
                    res.setHeader('Set-Cookie',`userid=${userId};path=/;httpOniy;expires=${setCookieExpires()}`)
                }
                res.end(
                    JSON.stringify(userData)
                )
            })
            return
        }
        res.writeHead('404',{'Content-Type':'text/plain'});
        res.write('404 NOT FOUND');
        res.end();
    })
}

module.exports = app;