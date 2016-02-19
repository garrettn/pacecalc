var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

module.exports = function () {
  return {
    entry: {
      app: path.resolve('src/main.js')
    },

    output: {
      filename: '[name].[hash].js',
      path: path.resolve('dist')
    },

    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: 'node_modules/html-webpack-template/index.ejs',
        appMountId: 'pacecalc',
        title: 'Pacecalc'
      })
    ]
  }
}
