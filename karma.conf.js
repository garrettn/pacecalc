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
          }
        ]
      },

      node: {
        fs: 'empty'
      },

      resolve: {
        modules: [
          path.resolve('src'),
          'node_modules'
        ]
      },

      devtool: 'inline-source-map'
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
