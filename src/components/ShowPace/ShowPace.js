import React, { PropTypes } from 'react'
import styles from './ShowPace.css'

function ShowPace ({ paceTimeString, paceDistanceUnit }) {
  return (
    <div>
      Required pace
      <div className={styles.paceWrapper}>
        <span className={styles.paceTime}>{paceTimeString}</span>
        <span className={styles.paceDistance}> / {paceDistanceUnit}</span>
      </div>
    </div>
  )
}

ShowPace.propTypes = {
  paceTimeString: PropTypes.string.isRequired,
  paceDistanceUnit: PropTypes.string.isRequired
}

export default ShowPace
