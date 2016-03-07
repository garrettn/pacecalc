import { combineReducers } from 'redux'
import distance from './distance'
import time from './time'

export default combineReducers({
  distance,
  time
})
