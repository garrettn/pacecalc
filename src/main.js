import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'components/Root/Root'
import configureStore from 'store/configureStore'

const store = configureStore()

require('styles/main.css')

ReactDOM.render(<Root store={store} />, document.getElementById('pacecalc'))
