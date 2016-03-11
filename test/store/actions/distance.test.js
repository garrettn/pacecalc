import test from 'tape'
import { setDistanceValue } from 'store/actions/distance'
import { SET_DISTANCE_VALUE } from 'store/constants'

test('store/actions/distance.setDistanceValue', function (t) {
  t.deepEquals(setDistanceValue(3),
    {
      type: SET_DISTANCE_VALUE,
      payload: 3
    }, 'creates an action to set the distance value')
  t.end()
})
