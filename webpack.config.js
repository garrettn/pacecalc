var path = require('path')
var webpack = require('webpack')

module.exports = function (options) {
  return {
    entry: {
      app: path.resolve('src/main.js')
    },

    output: {
      filename: '[name].[hash].js',
      path: path.resolve('dist')
    }
  }
}
