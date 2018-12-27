const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
const path = require('path');
const proxy = require('http-proxy-middleware');



module.exports = merge(common,{
    mode: 'development',
    devtool: "source-map",
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'static/js/[name].boundle.js'
    },
    plugins:[
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin(),

    ],
    devServer:{
        // contentBase: "./dist", // 本地服务器所加载文件的目录
        port: "8088", // 设置端口号为8088
        // inline: true, // 文件修改后实时刷新
        historyApiFallback: true, //不跳转
        // hot: true,
        compress:true,
    }
})