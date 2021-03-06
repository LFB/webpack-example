const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {srcPath} = require('./paths')

module.exports = {
  entry: {
    index: path.join(srcPath, 'index'),
    app: path.join(srcPath, 'app')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ['babel-loader'],
        include: srcPath,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'index.html'),
      filename: 'index.html',
      // 引入哪个 js 文件，如果不写，都会引入
      chunks: ['index', 'vendor', 'common']
    }),
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'app.html'),
      filename: 'app.html',
      chunks: ['app', 'common']
    })
  ]
}
