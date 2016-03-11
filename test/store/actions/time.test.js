import test from 'tape'
import * as actions from 'store/actions/time'
import * as constants from 'store/constants'

test('store/actions/time.setTimeHours', function (t) {
  t.deepEquals(actions.setTimeHours(2),
    {
      type: constants.SET_TIME_HOURS,
      payload: 2
    }, 'creates an action to set hours')
  t.end()
})

test('store/actions/time.setTimeMinutes', function (t) {
  t.deepEquals(actions.setTimeMinutes(35),
    {
      type: constants.SET_TIME_MINUTES,
      payload: 35
    }, 'creates an action to set minutes')
  t.end()
})

test('store/actions/time.setTimeSeconds', function (t) {
  t.deepEquals(actions.setTimeSeconds(41),
    {
      type: constants.SET_TIME_SECONDS,
      payload: 41
    }, 'creates an action to set seconds')
  t.end()
})
