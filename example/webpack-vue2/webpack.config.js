/*
 * @Date: 2025-02-06 16:17:56
 * @LastEditors: xiaoshan
 * @LastEditTime: 2025-03-09 13:15:24
 * @FilePath: /i18n_translation_vite/example/webpack-vue2/webpack.config.js
 */
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackPluginsAutoI18n = require('webpack-auto-i18n-plugin')

const { YoudaoTranslator } = require('webpack-auto-i18n-plugin')

const i18nPlugin = new webpackPluginsAutoI18n.default({
    globalPath: './lang',
    namespace: 'lang',
    distPath: './dist/assets',
    distKey: 'index',
    targetLangList: ['en', 'ko', 'ja', 'ru'],
    originLang: 'zh-cn',
    translator: new YoudaoTranslator({
        appId: '4cdb9baea8066fef',
        appKey: 'ONI6AerZnGRyDqr3w7UM730mPuF8mB3j'
    })
})

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        i18nPlugin
    ],
    devServer: {
        port: 3000,
        hot: true
    }
}
