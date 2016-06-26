import React from 'react'
import DistanceBlock from 'containers/DistanceBlock'
import TimeBlock from 'containers/TimeBlock'
import PaceBlock from 'containers/PaceBlock'
import styles from './PacecalcApp.css'

function PacecalcApp () {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Find Your Pace</h1>
      <DistanceBlock />
      <TimeBlock />
      <PaceBlock />
      <div className={styles.sourceLink}>
        <a href='https://github.com/garrettn/pacecalc'>View source</a>
      </div>
    </div>
  )
}

export default PacecalcApp
