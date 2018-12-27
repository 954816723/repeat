const merge = require('webpack-merge');
const common = require('./webpack.common');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')


module.exports = merge(common,{
    mode: 'production',
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'static/js/[name].[hash].js'
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
    ]
})