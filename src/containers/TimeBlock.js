import React from 'react'
import SetTime from 'components/SetTime/SetTime'

function TimeBlock () {
  return (
    <SetTime
      time={{hours: 0, minutes: 30, seconds: 0}}
      onHoursChange={() => true}
      onMinutesChange={() => true}
      onSecondsChange={() => true} />
  )
}

export default TimeBlock
