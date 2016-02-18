var path = require('path')

module.exports = function () {
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
