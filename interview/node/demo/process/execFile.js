let {execFile} = require('child_process');
let path = require('path');

let p1 = execFile('node',['exec.js','a','b','c'],{cwd:path.join(__dirname,'test')},function(err,stdout,stdin){
    console.log(err);
    console.log(stdout);
})