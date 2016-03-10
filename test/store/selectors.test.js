import test from 'tape'
import {
  selectDistance,
  selectTime,
  calculatePaceString,
  selectPaceDistanceUnit
} from 'store/selectors'

test('store/selectors.selectDistance', function (t) {
  const distance = { value: 2, unit: 'mi' }
  const state = { distance }
  t.equals(selectDistance(state), distance, 'selects distance from state')
  t.end()
})

test('store/selectors.selectTime', function (t) {
  const time = { hours: 0, minutes: 30, seconds: 0 }
  const state = { time }
  t.equals(selectTime(state), time, 'selects time from state')
  t.end()
})

test('store/selectors.calculatePaceString', function (t) {
  const state = {
    time: {
      hours: 3,
      minutes: 23,
      seconds: 23
    },
    distance: {
      value: 26.2,
      unit: 'mi'
    },
    pace: {
      distanceUnit: 'mi'
    }
  }

  t.equals(calculatePaceString(state), '7:46', 'calculates pace time string')
  t.end()
})

test('store/selectors/selectPaceDistanceUnit', function (t) {
  const distanceUnit = 'mi'
  const state = { pace: { distanceUnit } }
  t.equals(selectPaceDistanceUnit(state), distanceUnit, 'selects pace.distanceUnit from state')
  t.end()
})
