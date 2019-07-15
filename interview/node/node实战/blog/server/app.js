const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');
const querystring = require('querystring');

const app = (req,res) => {
    let blogResult = handleBlogRouter(req,res);
    if(blogResult){
        blogResult.then(blogData=>{
            res.end(
                JSON.stringify(blogData)
            )
        })
        return
    }
    let userResult = handleUserRouter(req,res);
    if(userResult){
        userResult.then(userData=>{
            res.end(
                JSON.stringify(userData)
            )
        })
        return
    }
    res.writeHead('404',{'Content-Type':'text/plain'});
    res.write('404 NOT FOUND');
    res.end();
}

module.exports = app;