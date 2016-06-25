import React, { PropTypes } from 'react'
import callWithValue from 'util/callWithValue'
import styles from './SetTime.css'

function SetTime ({ time, onHoursChange, onMinutesChange, onSecondsChange }) {
  return (
    <div>
      Time (hh:mm:ss)
      <div className={styles.inputs}>
        <input
          type='number'
          value={time.hours}
          min='0'
          onChange={callWithValue(onHoursChange)}
          className={styles.input} />
        <input
          type='number'
          value={time.minutes}
          min='0'
          max='60'
          onChange={callWithValue(onMinutesChange)}
          className={styles.input} />
        <input
          type='number'
          value={time.seconds}
          min='0'
          max='60'
          onChange={callWithValue(onSecondsChange)}
          className={styles.input} />
      </div>
    </div>
  )
}

SetTime.propTypes = {
  time: PropTypes.shape({
    hours: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    minutes: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    seconds: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }).isRequired,
  onHoursChange: PropTypes.func.isRequired,
  onMinutesChange: PropTypes.func.isRequired,
  onSecondsChange: PropTypes.func.isRequired
}

export default SetTime
