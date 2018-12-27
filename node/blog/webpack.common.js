const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Autoprefixer = require('autoprefixer');
const glob = require('glob');
const PurifyCssWebpack = require('purifycss-webpack');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: path.join(__dirname, '/src/static/js/main.js'),
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: { // 抽离第三方插件
                    test: /node_modules/, // 指定是node_modules下的第三方包
                    chunks: 'initial',
                    name: 'vendor', // 打包后的文件名，任意命名    
                    // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
                    priority: 10
                },
                utils: { // 抽离自己写的公共代码，utils这个名字可以随意起
                    chunks: 'initial',
                    name: 'common', // 任意命名
                    minSize: 0 // 只要超出0字节就生成一个新包
                },
            }
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].css',
            // chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.html'),
            filename: 'index.html',
            chunks: ['foo'],
            chunksSortMode: 'manual',
        }),
        new PurifyCssWebpack({
            paths: glob.sync(path.join(__dirname, '/src/*.html'))
        }),
         new webpack.ProvidePlugin({
            $:'jquery',
            'jQuery':'jquery',
            'window.jQuery':'jquery'
        }),
        // new CopyWebpackPlugin([  //背景图问题已解决,此方法保留
        //     {from:'./src/image/bg1.svg',to:'static/image/bg1.svg'},
        // ]),
        Autoprefixer
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {
                test: /\.(less|css)/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../../'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            minimize: true,
                        }
                    },
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(jpg|jpeg|png|svg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        limit: 1000,
                        name: 'static/image/[name].[ext]',
                    }
                }
            },
            {
                test: /\.(mp3|mp4|flac|ogg|webm)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        limit: 10000,
                        name: 'static/media/[hash].[ext]'
                    }
                }
            },
            {
                test: /\.(woff2|eot|fft|otf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        limit: 10000,
                        name: 'static/font/[hash].[ext]'
                    }
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            // {
            //     test: require.resolve('zepto'),
            //     loader: 'exports-loader?window.Zepto!script-loader'
            // }
        ]
    }
}