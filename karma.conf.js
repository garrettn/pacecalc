var path = require('path')

module.exports = function (config) {
  config.set({
    basePath: '',

    files: [
      'test/test.index.js'
    ],

    frameworks: ['tap'],

    preprocessors: {
      'test/test.index.js': ['webpack', 'sourcemap']
    },

    webpack: {
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
          },
          {
            // need this loader for cheerio (depenency of enzyme)
            test: /\.json$/,
            loader: 'json'
          },
          {
            test: /\.css$/,
            loader: 'css?modules'
          }
        ]
      },

      node: {
        fs: 'empty'
      },

      resolve: {
        root: [
          path.resolve('src')
        ]
      },

      devtool: 'inline-source-map',

      externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    },

    webpackMiddleware: {
      noInfo: true
    },

    browsers: ['PhantomJS'],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-sourcemap-loader',
      'karma-tap',
      'karma-webpack'
    ]
  })
}
