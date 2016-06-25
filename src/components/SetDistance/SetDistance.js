import React, { PropTypes } from 'react'
import callWithValue from 'util/callWithValue'
import styles from './SetDistance.css'

function SetDistance ({ distance, onDistanceValueChange }) {
  return (
    <div>
      <label>
        Distance ({distance.unit})
        <input
          type='number'
          value={distance.value}
          min='0'
          step='0.1'
          onChange={callWithValue(onDistanceValueChange)}
          className={styles.input} />
      </label>
    </div>
  )
}

SetDistance.propTypes = {
  distance: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    unit: PropTypes.string
  }).isRequired,
  onDistanceValueChange: PropTypes.func.isRequired
}

export default SetDistance
