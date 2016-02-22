var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

module.exports = function () {
  return {
    entry: {
      app: path.resolve('src/main.js'),
      vendor: [
        'react',
        'react-dom'
      ]
    },

    output: {
      filename: '[name].[hash].js',
      path: path.resolve('dist')
    },

    resolve: {
      modules: [
        path.resolve('src'),
        'node_modules'
      ]
    },

    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel'
        }
      ]
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
