const path = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
    // mode:'production',
    entry:{
        index:'./src/index.js'
    },
    output:{
        // publicPath:'/js',
        path:path.resolve(__dirname,'../dist'),
        filename:'[name].js',
        libraryExport: 'default',
        library: 'VUEUI',
        libraryTarget: 'commonjs2'
    },
    module: {
      rules: [
        {
          test: /\.(jsx?|babel|es6)$/,
          include: process.cwd(),
          exclude: /node_modules|utils\/popper\.js|utils\/date.\js/,
          loader: 'babel-loader'
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            compilerOptions: {
              preserveWhitespace: false
            },
            extractCSS:true
          }
        },
        {
          test: /\.(scss|css)$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.md$/,
          use: [
            {
              loader: 'vue-loader',
              options: {
                compilerOptions: {
                  preserveWhitespace: false
                }
              }
            },
            {
              loader: path.resolve(__dirname, './md-loader/index.js')
            }
          ]
        },
        {
          test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: path.posix.join('static', '[name].[hash:7].[ext]')
          }
        }
      ]
    },
    plugins:[
        new ProgressBarPlugin(),
        new VueLoaderPlugin(),
        new ExtractTextPlugin({
            filename:'./style/[name].css'
        })
    ]
};
