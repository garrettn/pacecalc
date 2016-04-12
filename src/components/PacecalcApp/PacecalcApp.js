import React from 'react'
import DistanceBlock from 'containers/DistanceBlock'
import TimeBlock from 'containers/TimeBlock'
import PaceBlock from 'containers/PaceBlock'
import styles from './PacecalcApp.css'

function PacecalcApp () {
  return (
    <div className={styles.container}>
      <h1>Find Your Pace</h1>
      <DistanceBlock />
      <TimeBlock />
      <PaceBlock />
    </div>
  )
}

export default PacecalcApp
