import React from 'react'
import DistanceBlock from 'containers/DistanceBlock'
import TimeBlock from 'containers/TimeBlock'
import PaceBlock from 'containers/PaceBlock'

function PacecalcApp () {
  return (
    <div>
      <h1>Find Your Pace</h1>
      <DistanceBlock />
      <TimeBlock />
      <PaceBlock />
    </div>
  )
}

export default PacecalcApp
