if (__DEV__) {
  module.exports = require('./Root.dev').default
} else {
  module.exports = require('./Root.prod').default
}
