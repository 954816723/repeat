const {getList,getDetail,newBlog,updateBlog,delBlog} = require('../controller/blog');
const {SuccessModel,ErrorModel} = require('../model/resModel');

const loginCheck = (req)=>{
    if(!req.session.username){
        return Promise.resolve(
            new ErrorModel('尚未登录')
        )
    }
}

const handleBlogRouter = (req,res) => {
    let method = req.method;
    let url = req.url;
    let path = url.split('?')[0];

    if(method === 'GET' && path === '/api/blog/list'){
        let author = req.query.author || '';
        let keyword = req.query.keyword || '';
        let result = getList(author,keyword);
        return result.then(blogData=>{
            return new SuccessModel(blogData)
        })
    }
    if(method === 'GET' && path === '/api/blog/detail'){
        let id = req.query.id;
        let result = getDetail(id);
        return result.then(data=>{
            if(data){
                return new SuccessModel(data)
            }else{
                return new ErrorModel('木有')
            }
        })
    }
    if(method === 'POST' && path === '/api/blog/new'){
        let checkResult = loginCheck(req);
        if(checkResult){
            return checkResult;
        }
        req.body.author = req.session.username;
        let blogData = req.body;
        let result = newBlog(blogData);
        return result.then(val=>{
            return new SuccessModel(val);
        })
        

    }
    if(method === 'POST' && path === '/api/blog/update'){
        let checkResult = loginCheck(req);
        if(checkResult){
            return checkResult;
        }
        let id = req.query.id;
        let data = req.body;
        let result = updateBlog(id,data);
        return result.then(val=>{
            if(val){
                return new SuccessModel('更新成功')
            }else{
                return new ErrorModel('更新失败')
            }
        })
        
    }
    if(method === 'POST' && path === '/api/blog/del'){
        let checkResult = loginCheck(req);
        if(checkResult){
            return checkResult;
        }
        let id = req.query.id;
        let author = req.session.username;
        let result = delBlog(id,author);
        return result.then(val=>{
            if(val){
                return new SuccessModel('删除成功')
            }else{
                return new ErrorModel('删除失败')
            }
        })
    }
}

module.exports = handleBlogRouter