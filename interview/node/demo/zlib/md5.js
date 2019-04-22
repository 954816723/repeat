/**
 * 1.可用用来减压要下载的文件是否被改动
 * 2.对密码进行加密
 */
let crypto = require('crypto');
let str = 'hello';
let md5 = crypto.createHash('md5');
let md5 = crypto.createHash('sha1');
md5.update(str);//指定要加密的值
md5.update('hehe');//再次指定要加密的值
console.log(md5.digest('hex'));//输出md5值,指定输出格式,hex十六进制
