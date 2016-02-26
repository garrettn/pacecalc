import React from 'react'
import SetDistance from 'components/SetDistance/SetDistance'

function DistanceBlock () {
  return (
    <SetDistance
      distance={{value: 3, unit: 'mi'}}
      onDistanceValueChange={() => true} />
  )
}

export default DistanceBlock
