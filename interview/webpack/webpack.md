## Webpack 模块打包工具
```js
const path = require('path')
module.exports = {
    mode:'development',
    entry:{
        main:'./src/index.js'
    },
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            // {
            //     test:/\.(jpg|svg|gif|jpeg|png)$/,
            //     use:{
            //         loader:'file-loader',
            //         options:{
            //             name:'[name]_[hash].[ext]',
            //             outputPath:'images/'
            //         }
            //     }
            // },
            {
                test:/\.(jpg|svg|gif|jpeg|png)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        name:'[name]_[hash].[ext]',
                        outputPath:'images/',
                        limit:2048
                    }
                }
            },
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader','postcss-loader']
            }
        ]
    }
}
```