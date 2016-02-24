if (__DEV__) {
  module.exports = require('./configureStore.dev').default
} else {
  module.exports = require('./configureStore.prod').default
}
