const {exec} = require('../db/mysql');

const getList = (author,keyword) => {
    let sql = 'select * from blogs where 1=1 ';
    if(author){
        sql += `and author='${author}'`
    }
    if(keyword){
        sql += `and title like '%${keyword}%'`
    }
    sql += `order by createtime desc;`;
    return exec(sql)
}
const getDetail = (id)=>{
    let sql = `select * from blogs where id='${id}'`
    return exec(sql).then(rows=>{
        return rows[0]
    })
}
const newBlog = (blogData = {}) => {
    let title = blogData.title,
        content = blogData.content,
        author = blogData.author,
        createtime = Date.now();
    let sql = `insert into blogs (title,content,author,createtime) 
                values ('${title}','${content}','${author}','${createtime}')`;
    return exec(sql).then(insertData=>{
        return {
            id:insertData.insertId
        }
    })
}
const updateBlog = (id,blogData = {}) => {
    let title = blogData.title,
        content = blogData.content;
    let sql = `update blogs title='${title}',content='${content}' where id='${id}'`;
    return exec(sql).then(updateData=>{
        if(updateData.affectedRows > 0){
            return true;
        }
        return false;
    })
}
const delBlog = (id,author) => {
    let sql = `delete from blogs where id='${id}' and author='${author}'`;
    return exec(sql).then(delData=>{
        if(delData.affectedRows > 0){
            return true;
        }
<<<<<<< HEAD
        return false;
=======
        return false
>>>>>>> be3e1290ebf5ab34a48c8f000d5d15e490d37893
    })
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}