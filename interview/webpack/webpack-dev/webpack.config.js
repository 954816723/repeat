let path = require('path');
// 模拟plugin
class p{
    apply(compiler){
        console.log('start');
        compiler.hooks.emit.tap('emit',function(){
            console.log('emit');
        })
    }    
}
module.exports = {
    devServer:{
        port:8080,
        open:true
    },
    entry:'./src/js/main.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist/js')
    },
    plugins:[
        new p()
    ],
    module:{
        rules:[
            {
                test:/\.(css|less)/,
                use:[
                    path.resolve(__dirname,'loader','style-loader'),
                    path.resolve(__dirname,'loader','less-loader'),
                ]
            },
        ]
    }
}