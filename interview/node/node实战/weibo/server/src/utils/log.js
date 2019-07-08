const fs = require('fs');
const path = require('path');

// 写日志
function writeLog(writeStream,log){
    writeStream.write(log + '\n');
}

// 生成write stream
function createWriteStream(fileName) {
    let fullFileName = path.join(__dirname,'../','../','logs',fileName);
    let writeStream = fs.createWriteStream(fullFileName,{flags:'a'});
    return writeStream;
}

let accessWriteStream = createWriteStream('access.log');

function access(log){
    writeLog(accessWriteStream,log)
}

module.exports = {
    access
}

