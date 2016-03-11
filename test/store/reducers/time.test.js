import test from 'tape'
import reducer from 'store/reducers/time'
import * as constants from 'store/constants'

const testInitialState = {
  hours: 3,
  minutes: 23,
  seconds: 35
}

test('store/reducers/distance', function (t) {
  const initialState = reducer(undefined, {})
  t.deepEquals(Object.keys(initialState),
    ['hours', 'minutes', 'seconds'],
    'returns an inital state with hours, minutes, and seconds keys')

  const unmatchedActionState = reducer(testInitialState, { type: 'TEST_ACTION' })
  t.equals(unmatchedActionState, testInitialState, 'returns same state on an unknown action')

  const newHoursState = reducer(testInitialState,
    {
      type: constants.SET_TIME_HOURS,
      payload: 4
    })
  t.deepEquals(newHoursState, { ...testInitialState, hours: 4 }, 'updates the hours')

  const newMinutesState = reducer(testInitialState,
    {
      type: constants.SET_TIME_MINUTES,
      payload: 21
    })
  t.deepEquals(newMinutesState, { ...testInitialState, minutes: 21 }, 'updates the minutes')

  const newSecondsState = reducer(testInitialState,
    {
      type: constants.SET_TIME_SECONDS,
      payload: 59
    })
  t.deepEquals(newSecondsState, { ...testInitialState, seconds: 59 }, 'updates the SECONDS')

  t.end()
})
