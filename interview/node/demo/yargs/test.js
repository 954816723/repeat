let yargs = require('yargs');

// let argv = yargs.argv;
let argv = yargs.options('n',{
    alias:'name',//别名
    demand:true,//必填
    default:'hehe',
    description:"你猜"
}).argv;

console.log(argv);
