const router = require('koa-router')()
const {getList,getDetail,newBlog,updateBlog,delBlog} = require('../controller/blog');
const {SuccessModel,ErrorModel} = require('../model/resModel');
const loginCheck = require('../middleware/loginCheck');

router.prefix('/api/blog')

router.get('/list',async function(ctx,next){
    let author = ctx.query.author || '';
    const keyword = ctx.query.keyword || '';
    if(ctx.query.isadmin){
        if(ctx.session.username == null){
            ctx.body = new ErrorModel('未登录')
            return
        }
        author = ctx.session.username;
    }
    
    const listData = await getList(author,keyword);
    ctx.body = new SuccessModel(listData)
})

router.get('/detail',async function(ctx,next){
    const data = await getDetail(ctx.query.id);
    ctx.body = new SuccessModel(data)
})

router.post('/new',loginCheck,async function(ctx,next){
    ctx.request.body.author = ctx.session.username;
    let blogData = ctx.request.body;
    let val = await newBlog(blogData);
    ctx.body = new SuccessModel(val)
})

router.post('/update',loginCheck,async function(ctx,next){
    let id = ctx.query.id;
    let data = ctx.request.body;
    let val = await updateBlog(id,data);
    if(val){
        ctx.body = new SuccessModel('更新成功');
    }else{
        ctx.body = new ErrorModel('更新失败');
    }
})

router.post('/del',loginCheck,async function(ctx,next){
    let id = ctx.query.id;
    let author = ctx.session.username;
    let val = await delBlog(id,author);
    if(val){
        ctx.body = new SuccessModel('删除成功')
    }else{
        ctx.body = new ErrorModel('删除失败')
    }
})


module.exports = router