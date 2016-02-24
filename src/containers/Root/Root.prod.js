import React from 'react'
import { Provider } from 'react-redux'
import PacecalcApp from 'containers/PacecalcApp'

export default function Root ({ store }) {
  return (
    <Provider store={store}>
      <PacecalcApp />
    </Provider>
  )
}
