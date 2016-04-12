var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlPlugin = require('html-webpack-plugin')
var path = require('path')
var webpack = require('webpack')

function getPlugins (production) {
  var basePlugins = [
    new webpack.DefinePlugin({
      __DEV__: !production
    }),
    new ExtractTextPlugin('[name].[contenthash].css'),
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

function getCSSLoaderConfig (modules, production) {
  var modulesParam = modules ? 'modules&localIdentName=[name]__[local]___[hash:base64:5]' : ''
  var minimizeParam = production ? '&minimize' : ''
  var sourcemapParam = production ? '' : '&sourceMap'

  return `css-loader?${modulesParam}${minimizeParam}${sourcemapParam}&importLoaders=1`
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
          test: /\.css$/,
          include: [
            path.resolve(__dirname, 'src/components')
          ],
          loader: ExtractTextPlugin.extract('style-loader', [getCSSLoaderConfig(true, production), 'postcss-loader'])
        },
        {
          test: /\.css$/,
          exclude: [
            path.resolve(__dirname, 'src/components')
          ],
          loader: ExtractTextPlugin.extract('style-loader', [getCSSLoaderConfig(false, production), 'postcss-loader'])
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel'
        }
      ]
    },

    postcss: function () {
      return [autoprefixer]
    },

    plugins: getPlugins(production),

    debug: !production,
    devtool: production ? null : 'eval-cheap-module-source-map'
  }
}

module.exports = createWebpackConfig
