const {login} = require('../controller/user');
const {SuccessModel,ErrorModel} = require('../model/resModel');
const {set,get} = require('../db/redis');

const handleUserRouter = (req,res) => {
    let method = req.method;
    if(method === 'POST' && req.path === '/api/user/login'){
        let {username,password} = req.body;
        let result = login(username,password);
        return result.then(loginData=>{
            if(loginData.username){
                req.session.username = loginData.username;
                req.session.realname = loginData.realname;
                set(req.sessionId,req.session);
                return new SuccessModel()
            }
            return new ErrorModel('登录失败');
        })
    }
}

module.exports = handleUserRouter