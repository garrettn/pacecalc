import {
  SET_TIME_HOURS,
  SET_TIME_MINUTES,
  SET_TIME_SECONDS
} from 'store/constants'

const initialState = {
  hours: 0,
  minutes: 30,
  seconds: 0
}

export default function time (state = initialState, action) {
  switch (action.type) {
    case SET_TIME_HOURS:
      return { ...state, hours: action.payload }
    case SET_TIME_MINUTES:
      return { ...state, minutes: action.payload }
    case SET_TIME_SECONDS:
      return { ...state, seconds: action.payload }
    default:
      return state
  }
}
