import React, { PropTypes } from 'react'
import callWithValue from 'util/callWithValue'

function SetDistance ({ distance, onDistanceValueChange }) {
  return (
    <div>
      <label>
        Distance:
        {' '}
        <input
          type='number'
          value={distance.value}
          min='0'
          onChange={callWithValue(onDistanceValueChange)} />
      </label>
      {' '}
      {distance.unit}
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
