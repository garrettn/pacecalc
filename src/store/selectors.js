export function selectDistance (state) {
  return state.distance
}

export function selectTime (state) {
  return state.time
}

export function calculatePaceString (state) {
  return '10:00'
}

export function selectPaceDistanceUnit (state) {
  return state.pace.distanceUnit
}
