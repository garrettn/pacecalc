import React from 'react'
import { Provider } from 'react-redux'
import PacecalcApp from 'components/PacecalcApp/PacecalcApp'
import DevTools from 'containers/DevTools'
import styles from './Root.css'

export default function Root ({ store }) {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <PacecalcApp />
        <DevTools />
      </div>
    </Provider>
  )
}
