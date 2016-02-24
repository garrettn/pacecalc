import React from 'react'
import { Provider } from 'react-redux'
import PacecalcApp from 'containers/PacecalcApp'
import DevTools from 'containers/DevTools'

export default function Root ({ store }) {
  return (
    <Provider store={store}>
      <div>
        <PacecalcApp />
        <DevTools />
      </div>
    </Provider>
  )
}
