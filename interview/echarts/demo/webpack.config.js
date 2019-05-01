let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    devServer:{
        port:8080,
        open:true
    },
    entry:'./src/js/main.js',
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist/js')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'css/sytle.css'
        }),
        new CleanWebpackPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env'],
                        plugins:[]
                    }
                }
            },
            {
                test:/\.(css|less)/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{
                            publicPath:'../../'
                        }
                    },
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test:/\.html$/,
                use:'html-loader'
            }
        ]
    }
}