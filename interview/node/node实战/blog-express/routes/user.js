let express = require('express');
let router = express.Router();
const {login} = require('../controller/user');
const {SuccessModel,ErrorModel} = require('../model/resModel');

router.post('/login',function(req,res,next){
    let {username,password} = req.body;
    let result = login(username,password);
    return result.then(loginData=>{
        if(loginData.username){
            req.session.username = loginData.username;
            req.session.realname = loginData.realname;
            res.json(
                new SuccessModel()
            )
            return
        }
        res.json(
            new ErrorModel('登录失败')
        )
    })
})

module.exports = router;