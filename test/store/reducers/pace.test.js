import test from 'tape'
import reducer from 'store/reducers/pace'

const testInitialState = {
  distanceUnit: 'km'
}

test('store/reducers/pace', function (t) {
  const initialState = reducer(undefined, {})
  t.deepEquals(Object.keys(initialState),
    ['distanceUnit'],
    'returns an inital state with distanceUnit key')

  const unmatchedActionState = reducer(testInitialState, { type: 'TEST_ACTION' })
  t.equals(unmatchedActionState, testInitialState, 'returns same state on an unknown action')

  t.end()
})
