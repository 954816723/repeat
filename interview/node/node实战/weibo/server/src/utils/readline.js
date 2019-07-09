const fs = require('fs');
const path = require('path');
const readline = require('readline');

// 文件名
const fileName = path.resovle(__dirname,'../','../','logs','access.log');
// 创建read stream
const readStream = fs.createReadStream(fileName);
// 创建readline对象
const rl = readline.createInterface({
    input:readStream
})
let chromeNum = 0;
let sum = 0;

rl.on('line',lineData=>{
    if(!lineData){
        return 
    }
    sum++;
    let arr = lineData.split(' -- ');
    if(arr[2]&&arr[2].indexOf('Chrome')>0){
        chromeNum++;
    }
})
rl.on('close',()=>{
    console.log('chrome 占比 : '+chromeNum / sum)
})