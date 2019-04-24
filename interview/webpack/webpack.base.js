// webpack 是node写出来的
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let OptimezeCss = require('optimize-css-assets-webpack-plugin');
let TerserJsPlugin = require('terser-webpack-plugin');
let Webpack = require('webpack');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    devServer: { //开发服务器配置
        port: 3000,
        progress: true, //显示进度条
        contentBase: './dist', //设置静态目录文件夹
        compress: true, //gzip压缩
        // proxy:{ //解决跨域问题
        //     '/api':{
        //         target:'htttp://localhost:8080',
        //         pathRewrite:{'/api':''} //有时候服务端并没有/api,将/api重写
        //     }
        // }
        //通过代理模拟数据
        // before(app){
        //     app.get('/user',(req,res)=>{
        //         res.json({name:"hehe"})
        //     })
        // }
    },
    // source-map 源码映射,会单独生成一个sourcemap文件,出错时会标识当前列和行
    // eval-source-map 不会产生单独的文件,但可以显示行和列
    // cheap-module-source-map 不会产生列,但是是一个单独的映射文件
    // cheap-module-eval-source-map 不生成文件,集成在打包文件中,不会产生列
    devtool: 'source-map', //添加映射文件,帮助我们调试源代码
    // 检测文件改动,自动打包
    watch: true,
    watchOptions: {
        poll: 1000, //每秒询问1000次
        aggregateTimeout: 500, //防抖
        ignored: /node_modules/ //忽略监控的文件
    },
    resolve: { //解析第三方包
        modules: [path.resolve('node_modules')], //从当前文件夹下寻找模块
        extensions: ['.js', '.css', '.json'], //文件扩展名,找不到文件依次添加后缀寻找
        mainFields: ['style', 'main'], //设置模块入口先从哪个字段解析
        // mainfiles:[],//设置入口文件,默认index.js
        alias: { //别名
            bootstrap: 'bootstrap/dist/css/bootstrap.css',
        }
    },
    optimization: {
        minimizer: [
            // 使用optimizeCssPlugin就要使用Terser来压缩js
            new TerserJsPlugin({
                cache: true, //缓存
                parallel: true, //是否并发打包
                sourceMap: true //
            }),
            // 生产环境下压缩css
            new OptimezeCss()
        ]
    },
    // mode: 'production', //模式,默认两种,production development
    // entry:'./src/index.js',
    // 多入口
    entry: {
        home: "./src/index.js",
        other: "./src/other.js",
    },
    output: {
        // name就对应home,other
        filename: '[name].[hash:8].js', //打包后的文件
        path: path.resolve(__dirname, 'dist'), //路径必须是一个绝对路径
        // publicPath:'http://www.biubiubiu.ltd' //配置公共路径
    },
    plugins: [ //数组,放置所有webpack插件
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            hash: true,
            chunks: ['home'], //页面只引入对应的js文件
            minify: {
                removeAttributeQuotes: true, //删除html中的双引号
                collapseWhitespace: true, //删除空格,变成一行
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'other.html',
            chunks: ['other'],
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.css'
        }),
        new Webpack.ProvidePlugin({ //在每个模块中都注入$
            $: 'jquery',
        }),
        new CleanWebpackPlugin(),
        // new CopyWebpackPlugin([
        //     {from:'./src/crossroad.jpg',to:'copy'}
        // ]),
        new Webpack.BannerPlugin('make by me'),
        new Webpack.DefinePlugin({ //定义环境变量
            DEV: JSON.stringify('production'), //注意值会被直接添加到环境变量中,不能直接引号
            FLAG: 'true'
        })
    ],
    externals: {
        // jquery通过cdn引入,js中再次引入不进行打包
        jquery: '$'
    },
    module: { //模块
        rules: [ //规则
            // css-loader 解析@import这种语法
            // style-loader 将css插入到head标签中
            // loader特点,希望单一
            // loader用法:字符串表示只是用一个loader,多个使用数组,或者对象
            // loader默认顺序,从右向左执行,从下到上执行
            // {
            //     test:/\.css|less$/,
            //     use:[
            //         {
            //             loader:'style-loader',
            //             options:{
            //                 insertAt:'top' //插入head头部
            //             }
            //         },
            //         'css-loader',
            //         'less-loader'   //less->css
            //     ]
            // },
            {
                test: require.resolve('jquery'),
                use: 'expose-loader?$'
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    // 使用url-loader的limit限制图片大小,小图片使用base64转化
                    // 否则使用file-loader产生真实的图片
                    options: {
                        limit: 100 * 1024,
                        outputPath: 'img',
                        // publicPath:'http://www.biubiubiu.ltd' //图片也可以单独配置公共路径
                    }
                }
            },
            {
                test: /\.css|less$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../../'
                        }
                    },
                    'css-loader',
                    'postcss-loader',
                    'less-loader' //less->css
                ]
            },
            // {
            //     test:/\.js$/,
            //     use:{
            //         loader:'eslint-loader',
            //         options:{
            //             // loader默认从右向左,从下到上执行
            //             // enforce:'pre' 前置,在普通loader前执行
            //             // enforce:'post' 后置
            //             enforce:'pre' //previous 前置
            //         }
            //     },
            // },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ],
                        plugins: [
                            ["@babel/plugin-proposal-decorators", {
                                "legacy": true
                            }],
                            ["@babel/plugin-proposal-class-properties", {
                                "loose": true
                            }],
                            "@babel/plugin-transform-runtime"
                        ]
                    }
                },
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: ['html-loader']
            }
        ]
    }
}