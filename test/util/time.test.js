import test from 'tape'
import { toSeconds, fromSeconds } from 'util/time'

test('util/time/toSeconds', function (t) {
  const totalSeconds = toSeconds({ hours: 2, minutes: 38, seconds: 45 })
  t.equals(totalSeconds, 9525, 'calculates total seconds')

  const totalSecondsWithStrings = toSeconds({ hours: '2', minutes: '38', seconds: '45' })
  t.equals(totalSecondsWithStrings, 9525, 'allows string values')
  t.end()
})

test('util/time/fromSeconds', function (t) {
  const time = fromSeconds(9525)
  t.deepEquals(time, { hours: 2, minutes: 38, seconds: 45 }, 'splits total seconds')
  t.end()
})
