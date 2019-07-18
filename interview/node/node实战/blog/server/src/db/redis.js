const redis = require('redis');
const {REDIS_CONF} = require('../conf/db');

const redisClient = redis.createClient(REDIS_CONF.port,REDIS_CONF.host);

redisClient.on('error',err=>{
    console.log(err);
})

function set(key,val){
    if(typeof val === 'object'){
        val = JSON.stringify(val);
    }
    redisClient.set(key,val,redis.print);
}

function get(key){
    let promise = new Promise((resolve,reject)=>{
        redisClient.get(key,(err,data)=>{
            if(err){
                reject(err);
                return;
            }
            if(data == null){
                resolve(null);
                return;
            }
            try {
                resolve(
                    JSON.parse(data)
                )
            } catch (error) {
                resolve(data)
            }
        })
    })
    return promise
}

module.exports = {
    set,
    get
}