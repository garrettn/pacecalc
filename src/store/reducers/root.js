import { combineReducers } from 'redux'
import distance from './distance'
import time from './time'
import pace from './pace'

export default combineReducers({
  distance,
  time,
  pace
})
