## Webpack 模块打包工具
```js
// npm install webpack webpack-cli css-loader style-loader url-loader file-loader autoprefixer
//             babel-loader @babel/core @babel/preset-dev @babel/polyfill @babel/plugin-transform-runtime @babel/runtime-corejs2
//             eslint-loader
//             html-webpack-plugin clean-webpack-plugin mini-css-extract-plugin optimize-css-assets-plugin webpack-dev-server
//             add-asset-html-webpack-plugin(dll引入到html中)
//             webpack-dev-middleware webpack-merge imports-loader(this->window) 
//             workbox-webpack-plugin     -D 
// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssExtractPlugin = require('optimize-css-assets-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode:'development',
    // devtool:'cheap-module-eval-source-map', //development
    // devtool:'cheap-module-source-map',  //production
    // cheap只有行信息没有列信息 inline不会单独生成映射文件 module包含loader的sourcemap eval使用eval打包源文件模块
    devServer:{
        overlay:true, //浏览器中弹层显示错误信息
        contentBase:'./dist',
        open:true,
        port:3000,
        hot:true,   //HMR
        hotOnly:true, //不刷新浏览器
        proxy:{
            '_api': {
                target:'http://biubiubiu.ltd',
                // secure:false, //接受https
                changeOrigin:true,
                pathRewrite:{
                    'header.json':'demo.json'
                } 
            }
        }
    },
    resolve:{
        extensions:['.js','.jsx'],
        alias:{
            @:path.resolve(__dirname,'./src')
        }
        // mainFiles:['index','child']
    },
    entry:{
        main:'./src/index.js',
        sub:'./src/index.js'
    },
    output:{
        // publicPath:'http://cdn.com',  //配置cdn
        publicPath:'/',
        filename:'[name].[contenthash].js',
        chunkFilename:'[name].[contenthash].chunk.js',
        path:path.resolve(__dirname,'dist'),
        // library:'library',   //兼容库打包
        // libraryTarget:'umd'
    },
    externals:'lodash', //打包库的时候不打包lodash,让业务代码打包,避免重复打包
    plugins:[
        new HtmlWebpackPlugin({
            template:'src/index.html'
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename:'[name].css',
            chunkFilename:'[name].chunk.css'
        }),
        new webpack.ProvidePlugin({
            $:'jquery'
        }),
        // dll文件引入到html中
        new AddAssetHtmlWebpackPlugin({
            filepath:path.resolve(__dirname,'../dll/vendors.dll.js')
        })
        // dllPlugin
        new webpack.DllReferencePlugin({
            manifest:path.resolve(__dirname,'../dll/vendors.manifest.json')
        })
        // PWA
        new WorkboxPlugin.GenerateSW({
            clientsClaim:true,
            skipWaiting:true
        })
    ],
    // lazy loading js文件中通过import语法写异步代码,实现lazy loading
    //Tree Shaking 生产环境默认开启，开发环境配置此项，但还是会打包，只是在代码中会提示(package.json中 sideEffects:false )
    optimization:{
        // usedExports:true,    
        minimizer:[new OptimizeCssExtractPlugin({})],   //压缩css
        splitChunks: {
            chunks: 'async',    //代码分割只对异步代码生效  all全部
            minSize: 30000,     //大于此字节才会进行分割
            // maxSize: 0,
            minChunks: 1,       //当代码被至少引入多少次后会被进行代码分割
            maxAsyncRequests: 5,    //同时加载的模块数
            maxInitialRequests: 3,  //入口文件代码分割数 
            automaticNameDelimiter: '~',    //分割后文件名连接符
            name: true,     //cacheGroups中的文件命名生效
            cacheGroups: {  //缓存组
                vendors: {
                    test: /[\\/]node_modules[\\/]/, //如果代码是node_modules中的就会进行分割
                    priority: -10,  //权重,优先级
                    filename:'vendors.js'
                },
                default: {
                    // minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,   //忽略已经打包的模块,避免重复打包
                    filename:'common.js'
                }
            }
        }
    },
    performance:false,  //打包不显示性能上的提示
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
                test:/\.js$/,
                exclude:/node_modules/,
                // loader:'babel-loader',
                use:[
                    {
                        loader:'babel-loader'
                    },
                    // {
                    //     loader:'imports-loader?this=>window'
                    // },
                    // {
                    //     loader:'eslint-loader'
                    // }
                ]
                // .babelrc
                // options:{
                //     presets:[['@babel/preset-dev',{
                //         useBuiltIns:'usage'
                //     }]],
                //     plugins:[['@babel/plugin-transform-runtime',{
                //         "corejs":2,
                //         "helpers":true,
                //         "regenerator":true,
                //         "useESModules":false
                //     }]]
                // }
            },
            {
                test:/\.(scss|css)$/,
                use:[
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
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

// .babelrc
{
    presets:[['@babel/preset-dev',{
        useBuiltIns:'usage'
    }]],
    plugins:[['@babel/plugin-transform-runtime',{
        "corejs":2,
        "helpers":true,
        "regenerator":true,
        "useESModules":false
    }]]
}

// postcss.config.js
// npm install autoprefixer -D
module.exports = {
    plugins： [
        require('autoprefixer')
    ]
}

// server.js
const express = require('express')
const webpack = require('webpack')
const WebpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config.js')
const complier = webpack(config)

const app = express()
app.use(WebpackDevMiddleware(complier,{
    publicPath:config.output.publicPath
}))

app.listen(8080,() => {
    console.log('server is running')
})

// index.js
document.addEventListener('click',()=>{
    import(/*webpackPrefetch:true*/'./click.js').then(({default:func}) => {
        func()
    })
}) 

// PWA
if('serviceWorker' in navigator){
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
            .then(registration => {
                console.log('service-worker registed')
            }).catch(error => {
                console.log('service-worker registed error')
            })
    })
}

// webpack.dll.js
const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode:'production',
    entry:{
        vendors:['react','react-dom','lodash']
    },
    output:{
        filename:'[name].dll.js',
        path:path.resolve(__dirname,'../dll'),
        library:'[name]'
    },
    plugins:[
        // 检查映射关系,引入第三方模块的时候,去使用dll文件引入
        new webpack.DllPlugin({
            name:'[name]',
            path:path.resolve(__dirname,'../dll/[name].manifest.json')
        })
    ]
}
```

## webpack性能优化
1. 跟上技术迭代,更新webpack,node,npm  
2. 在尽可能少的模块上应用loader,合理使用exclude,include  
3. Plugin尽可能精简并确保可靠  
4. resolve参数合理配置  
5. 使用DllPlugin提高打包速度  
6. 控制包文件大小 tree shaking,splitchunks  
7. thread-loader,parallel-webpack(多页面打包),happypack多进程打包  
8. 合理使用sourceMap  
9. 开发环境内存编译  
10. 开发环境无用插件剔除  

## webpack-chain
通过提供可链式或顺流式的API创建和修改webpack配置  
`npm install --save-dev webpack-chain`  

