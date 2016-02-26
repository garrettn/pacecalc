import React, { PropTypes } from 'react'

function ShowPace ({ paceTimeString, paceDistanceUnit }) {
  return (
    <div>
      Required pace: {paceTimeString} / {paceDistanceUnit}
    </div>
  )
}

ShowPace.propTypes = {
  paceTimeString: PropTypes.string.isRequired,
  paceDistanceUnit: PropTypes.string.isRequired
}

export default ShowPace
