/**
 * @flow
 */
const path = require('path')
const root = __dirname
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  // 入口文件
  entry: {
    remStyle: [path.resolve(root, 'src/rem/remStyle.js'),],
    page: [
      'react-hot-loader/patch', // 激活HMR
      'webpack-dev-server/client',
      'webpack/hot/only-dev-server',
      path.resolve(root, 'src/index.js'),
    ],
  },
  // 出口文件
  output: {
    filename: '[name].js',
    path: path.resolve(root, 'dist'),
    publicPath: '/',
  },
  // loaders
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
    ]
  },

  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({  //有助于提取这些依赖到共享的 bundle 中，来避免重复打包
    //   name: 'remStyle',
    //   filename: 'remStyle.min.js',
    // }),
    new HtmlWebpackPlugin({
      title: '在线音乐',
      template: path.resolve(root,'src','index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(), // 热替换插件
    new webpack.NamedModulesPlugin() // 执行热替换时打印模块名字
  ],

  devServer: {
    hot: true, // 激活服务器的HMR
    contentBase: path.resolve(root, 'dist'),
    publicPath: '/',
    port: 8099,
    historyApiFallback: true
  }
}