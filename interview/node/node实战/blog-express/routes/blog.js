let express = require('express');
let router = express.Router();
const {getList,getDetail,newBlog,updateBlog,delBlog} = require('../controller/blog');
const {SuccessModel,ErrorModel} = require('../model/resModel');
const loginCheck = require('../middleware/loginCheck');

router.get('/list',function(req,res,next){
    let author = req.query.author || '';
    const keyword = req.query.keyword || '';
    if(req.query.isadmin){
        if(req.session.username == null){
            res.json(
                new ErrorModel('未登录')
            )
            return
        }
        author = req.session.username;
    }
    
    const result = getList(author,keyword);
    return result.then(listData=>{
        res.json(
            new SuccessModel(listData)
        )
    })
})

router.get('/detail',function(req,res,next){
    const result = getDetail(req.query.id);
    return result.then(data=>{
        res.json(
            new SuccessModel(data)
        )
    })
})

router.post('/new',loginCheck,function(req,res,next){
    req.body.author = req.session.username;
    let blogData = req.body;
    let result = newBlog(blogData);
    return result.then(val=>{
        res.json(
            new SuccessModel(val)
        )
    })
})

router.post('/update',loginCheck,function(req,res,next){
    let id = req.query.id;
    let data = req.body;
    let result = updateBlog(id,data);
    return result.then(val=>{
        if(val){
            res.json(
                new SuccessModel('更新成功')
            )
        }else{
            res.json(
                new ErrorModel('更新失败')
            )
        }
    })
})

router.post('/delete',loginCheck,function(req,res,next){
    let id = req.query.id;
    let author = req.session.username;
    let result = delBlog(id,author);
    return result.then(val=>{
        if(val){
            res.json(
                new SuccessModel('删除成功')
            )
        }else{
            res.json(
                new ErrorModel('删除失败')
            )
        }
    })
})

module.exports = router;