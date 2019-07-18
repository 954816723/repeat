const router = require('koa-router')()
const {login} = require('../controller/user');
const {SuccessModel,ErrorModel} = require('../model/resModel');

router.prefix('/api/user')

router.post('/login',async function(ctx,next){
    let {username,password} = ctx.request.body;
    let loginData = await login(username,password);
    if(loginData.username){
        ctx.session.username = loginData.username;
        ctx.session.realname = loginData.realname;
        ctx.body = new SuccessModel()
        return
    }
    ctx.body = new ErrorModel('登录失败')
})

module.exports = router