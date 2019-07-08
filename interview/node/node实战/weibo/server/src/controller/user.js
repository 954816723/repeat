const {exec} = require('../db/mysql');

<<<<<<< HEAD
const loginCheck = (username,password) => {
    let sql = `select username realname from users where username='${username}' and password='${password}'`;
=======
const login = (username,password) => {
    const sql = `select username realname from users where username='${username} and password='${password}'`;
>>>>>>> be3e1290ebf5ab34a48c8f000d5d15e490d37893
    return exec(sql).then(rows=>{
        return rows[0] || {}
    })
}
module.exports = {
    login
}