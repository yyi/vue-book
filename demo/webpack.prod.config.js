var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.config.js');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 清空基本配置的插件列表
webpackBaseConfig.plugins = [];

module.exports = merge(webpackBaseConfig, {
    mode: 'production',
    output: {
        publicPath: '/dist/',
        // 将入口文件重命名为带有 20 位 hash 值的唯一文件
        filename: '[name].[hash].js'
    },
    plugins: [

        // 定义当前 node 环境为生产环境
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),

        // 提取模板，并保存入口 html 文件
        new HtmlWebpackPlugin({
            filename: '../index_prod.html',
            template: './index.ejs',
            inject: false
        }),
        new VueLoaderPlugin()
    ]
});
