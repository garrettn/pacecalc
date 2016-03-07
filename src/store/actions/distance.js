import { SET_DISTANCE_VALUE } from 'store/constants'

export function setDistanceValue (value) {
  return {
    type: SET_DISTANCE_VALUE,
    payload: value
  }
}
