var webpack = require('webpack')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = {
  //配置webpack的入口文件(first.js)
  entry: './src/index.js',
  //配置webpack的输出文件(final.js)
  output: {
    path: path.resolve(__dirname, './dist'),   //__dirname是指项目的根路径
    publicPath: '/dist/',
    filename: 'index.js'
  },
  module: {
    rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.scss$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader
              },
              {
                // Interprets CSS
                loader: "css-loader",
                options: {
                  importLoaders: 2
                }
              },
              {
                loader: 'sass-loader' // 将 Sass 编译成 CSS
              }
            ]
          }
    ]
    },
    resolve:{ // resolve: 解决
        // 配置后缀名简写 导入的时候可以省略后缀名 import './a.vue' => import 'a'
        extensions:['.js','.vue','.css'],
        alias:{ // alias（别名）
            // 默认导入的是  vue/dist/vue.runtime.js
            // 用处 当导入vue的时候(import Vue from 'vue') 的时候  相当于导入 'vue/dist/vue.esm.js'  esm=>ESModule
            'vue$':'vue/dist/vue.esm.js'  
        }  
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'index.css',
            allChunks: true,
          })
    ],
    optimization: {
        minimizer: [
          // 有时候webpack会默认优化z-index值，设置默认不优化
          new OptimizeCSSAssetsPlugin({
            cssProcessorOptions: {
              safe: true
            }
          })
        ]
      }
}