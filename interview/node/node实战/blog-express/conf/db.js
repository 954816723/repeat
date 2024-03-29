const env = process.env.NODE_ENV;   // 环境参数

let MYSQL_CONF;
let REDIS_CONF;

if(env === 'development'){
    // MYSQL
    MYSQL_CONF = {
        host:'localhost',
        user:'root',
        password:'chenwei19921020',
        port:'3306',
        database:'myblog'
    }
    // REDIS
    REDIS_CONF = {
        port:6379,
        host:'127.0.0.1'
    }
}

if(env === 'production'){
    // MYSQL
    MYSQL_CONF = {
        host:'localhost',
        user:'root',
        password:'chenwei19921020',
        port:'3306',
        database:'myblog'
    }
    // REDIS
    REDIS_CONF = {
        port:6379,
        host:'127.0.0.1'
    }
}

module.exports = {
    MYSQL_CONF,
    REDIS_CONF
}