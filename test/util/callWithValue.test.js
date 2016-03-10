import test from 'tape'
import { spy } from 'sinon'
import callWithValue from 'util/callWithValue'

test('util/callWithValue', function (t) {
  const value = 'value'
  const event = { target: { value } }
  const handler = spy()

  const resultFn = callWithValue(handler)

  t.equal(typeof resultFn, 'function', 'returns a function')

  resultFn(event)
  t.ok(handler.calledWith(value), 'calls the passed function with the value of the event target')

  t.end()
})
