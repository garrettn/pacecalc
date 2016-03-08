var HtmlPlugin = require('html-webpack-plugin')
var path = require('path')
var webpack = require('webpack')

function getPlugins (production) {
  var basePlugins = [
    new webpack.DefinePlugin({
      __DEV__: !production
    }),
    new HtmlPlugin({
      inject: false,
      template: 'node_modules/html-webpack-template/index.ejs',
      appMountId: 'pacecalc',
      title: 'Pacecalc'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    })
  ]

  return production
    ? basePlugins.concat([
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin()
    ])
    : basePlugins
}

function createWebpackConfig () {
  var production = process.env.NODE_ENV === 'production'

  return {
    entry: {
      app: path.resolve('src/main.js'),
      vendor: [
        'mathjs',
        'react',
        'react-dom',
        'react-redux',
        'redux',
        'simple-zeropad'
      ]
    },

    output: {
      filename: '[name].[chunkhash].js',
      path: path.resolve('dist'),
      pathinfo: !production
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

    plugins: getPlugins(production),

    debug: !production,
    devtool: production ? null : 'eval-cheap-module-source-map'
  }
}

module.exports = createWebpackConfig
