import {
  calculatePace,
  renderHoursString,
  renderMinutesString,
  renderSecondsString
} from 'util/pace'

export function selectDistance (state) {
  return state.distance
}

export function selectTime (state) {
  return state.time
}

export function calculatePaceString (state) {
  const { hours, minutes, seconds } = calculatePace(
    state.time,
    state.distance.value,
    state.distance.unit,
    state.pace.distanceUnit
  )

  return renderHoursString(hours) +
    renderMinutesString(hours, minutes) +
    renderSecondsString(hours, minutes, seconds)
}

export function selectPaceDistanceUnit (state) {
  return state.pace.distanceUnit
}
