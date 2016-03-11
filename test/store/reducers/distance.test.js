import test from 'tape'
import reducer from 'store/reducers/distance'
import { SET_DISTANCE_VALUE } from 'store/constants'

const testInitialState = {
  value: 7,
  unit: 'mi'
}

test('store/reducers/distance', function (t) {
  const initialState = reducer(undefined, {})
  t.deepEquals(Object.keys(initialState),
    ['value', 'unit'],
    'returns an inital state with value and unit keys')

  const unmatchedActionState = reducer(testInitialState, { type: 'TEST_ACTION' })
  t.equals(unmatchedActionState, testInitialState, 'returns same state on an unknown action')

  const newValueState = reducer(testInitialState,
    {
      type: SET_DISTANCE_VALUE,
      payload: 13.1
    })
  t.deepEquals(newValueState, { ...testInitialState, value: 13.1 }, 'updates the distance value')

  t.end()
})
