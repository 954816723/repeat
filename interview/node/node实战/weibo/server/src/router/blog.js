const {getList,getDetail,newBlog,updateBlog,delBlog} = require('../controller/blog');
const {SuccessModel,ErrorModel} = require('../model/resModel');

// 统一的登录验证函数
const loginCheck = (req)=>{
    if(!req.session.username){
        return Promise.resolve(
            new ErrorModel('尚未登录')
        )
    }
}

const handleBlogRouter = (req,res) => {
    const method = req.method;
    const url = req.url;
    const path = url.split('?')[0];
    const id = req.query.id;

    // 获取博客列表
    if(method === 'GET' && path === '/api/blog/list'){
        const author = req.query.author || '';
        const keyword = req.query.keyword || '';
        const result = getList(author,keyword);
        return result.then(listData=>{
            return new SuccessModel(listData)
        })
    }
    // 获取博客详情
    if(method === 'GET' && path === '/api/blog/detail'){
        const result = getDetail(id);
        return result.then(data=>{
            return new SuccessModel(data)
        })
    }
    // 新建一篇博客
    if(method === 'POST' && path === 'api/blog/new'){
        const loginCheckResult = loginCheck(req);
        if(loginCheckResult){
            return loginCheckResult
        }
        
        req.body.author = req.session.username;
        const result = newBlog(req.body);
        return result.then(data=>{
            return new SuccessModel(data)
        })
    }
    // 更新一篇博客
    if(method === 'POST' && path === '/api/blog/update'){
<<<<<<< HEAD
=======
        const loginCheckResult = loginCheck(req);
        if(loginCheckResult){
            return loginCheckResult
        }
>>>>>>> be3e1290ebf5ab34a48c8f000d5d15e490d37893
        const result = updateBlog(id,req.body);
        return result.then(val=>{
            if(val){
                return new SuccessModel();
            }else{
                return new ErrorModel('更新失败')
            }
        })
    }
    // 删除一篇博客
    if(method === 'POST' && path === '/api/blog/del'){
<<<<<<< HEAD
        const author = 'zhangsan';
        const result = delBlog(id,author);
        return result.then(val=>{
            if(val){
                return new SuccessModel();
            }else{
                return new ErrorModel('更新失败')
=======
        const loginCheckResult = loginCheck(req);
        if(loginCheckResult){
            return loginCheckResult
        }
        let author = req.session.username;
        const result = delBlog(id,author);
        result.then(val=>{
            if(val){
                return new SuccessModel();
            }else{
                return new ErrorModel('删除失败')
>>>>>>> be3e1290ebf5ab34a48c8f000d5d15e490d37893
            }
        })
    }
}

module.exports = handleBlogRouter