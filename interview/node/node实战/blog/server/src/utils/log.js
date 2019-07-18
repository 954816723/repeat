const fs = require('fs');
const path = require('path');

function writeLog(writeStream,log){
    writeStream.write(log + '\n')
}

function createWriteStream(filename){
    let filePath = path.resolve(__dirname,'../','../','logs',filename);
    return fs.createWriteStream(filePath,{flag:'a'})
}

let accessWriteStream = createWriteStream('access.log');

function access(log){
    writeLog(accessWriteStream,log)
}

module.exports = {
    access
}