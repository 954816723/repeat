## Webpack 模块打包工具
```js
// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
    mode:'development',
    // devtool:'cheap-module-eval-source-map', //development
    // devtool:'cheap-module-source-map',  //production
    devServer:{
        contentBase:'./dist'
    },
    entry:{
        main:'./src/index.js',
        sub:'./src/index.js'
    },
    output:{
        // publickPath:'http://cdn.com',  //配置cdn
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'src/index.html'
        }),
        new CleanWebpackPlugin(['dist'])
    ],
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
                use:[
                    'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            importLoaders:2, //引入的其他模块也要执行前两个loader
                            modules:true     //css module
                        }  
                    }
                    'sass-loader',
                    'postcss-loader'
                ]
            },
            {
                test:/\.(eot|ttf|svg)$/,
                use:{
                    loader:'file-loader'
                }
            }
        ]
    }
}

// postcss.config.js
// npm install autoprefixer -D
module.exports = {
    plugins： [
        require('autoprefixer')
    ]
}
```