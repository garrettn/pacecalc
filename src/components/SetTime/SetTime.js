import React, { PropTypes } from 'react'
import callWithValue from 'util/callWithValue'

function SetTime ({ time, onHoursChange, onMinutesChange, onSecondsChange }) {
  return (
    <div>
      Time:
      {' '}
      <input
        type='number'
        value={time.hours}
        onChange={callWithValue(onHoursChange)} />:
      <input
        type='number'
        value={time.minutes}
        onChange={callWithValue(onMinutesChange)} />:
      <input
        type='number'
        value={time.seconds}
        onChange={callWithValue(onSecondsChange)} />
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
