import {
  SET_TIME_HOURS,
  SET_TIME_MINUTES,
  SET_TIME_SECONDS
} from 'store/constants'

export function setTimeHours (value) {
  return {
    type: SET_TIME_HOURS,
    payload: value
  }
}

export function setTimeMinutes (value) {
  return {
    type: SET_TIME_MINUTES,
    payload: value
  }
}

export function setTimeSeconds (value) {
  return {
    type: SET_TIME_SECONDS,
    payload: value
  }
}
