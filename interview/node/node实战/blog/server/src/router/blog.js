const {getList,getDetail,newBlog,updateBlog,delBlog} = require('../controller/blog');
const {SuccessModel,ErrorModel} = require('../model/resModel');

const handleBlogRouter = (req,res) => {
    let method = req.method;
    let url = req.url;
    let path = url.split('?')[0];

    if(method === 'GET' && path === '/api/blog/list'){
        
    }
    if(method === 'GET' && path === '/api/blog/detail'){

    }
    if(method === 'POST' && path === '/api/blog/new'){

    }
    if(method === 'POST' && path === '/api/blog/update'){

    }
    if(method === 'POST' && path === '/api/blog/del'){

    }
}

module.exports = handleBlogRouter