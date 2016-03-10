import test from 'tape'
import {
  calculatePace,
  renderHoursString,
  renderMinutesString,
  renderSecondsString
} from 'util/pace'

test('util/pace/calculatePace', function (t) {
  const pace1 = calculatePace(
    { hours: 0, minutes: 30, seconds: 0 },
    3,
    'mi',
    'mi'
  )
  t.deepEquals(pace1, { hours: 0, minutes: 10, seconds: 0 }, 'calculates simple pace')

  const pace2 = calculatePace(
    { hours: 3, minutes: 23, seconds: 23 },
    26.2,
    'mi',
    'mi'
  )
  t.deepEquals(pace2, { hours: 0, minutes: 7, seconds: 46 }, 'calculates complex pace')
  t.end()
})

test('util/pace/renderHoursString', function (t) {
  t.equals(renderHoursString(0), '', 'renders empty string when hours is 0')
  t.equals(renderHoursString(2), '2:', 'renders hours with a colon')
  t.end()
})

test('util/pace/renderMinutesString', function (t) {
  t.equals(renderMinutesString(0, 0), '', 'renders empty string when hours and minutes are both 0')
  t.equals(renderMinutesString(0, 5), '5:', 'renders minutes with a colon')
  t.equals(renderMinutesString(1, 5), '05:', 'renders zeropadded minutes if hours > 0')
  t.end()
})

test('util/pace/renderSecondsString', function (t) {
  t.equals(renderSecondsString(0, 0, 15), '15 s', 'renders seconds with an s if hours and minutes are both 0')
  t.equals(renderSecondsString(0, 3, 15), '15', 'renders plain seconds if minutes > 0')
  t.equals(renderSecondsString(2, 0, 15), '15', 'renders plain seconds if hours > 0')
  t.equals(renderSecondsString(2, 3, 15), '15', 'renders plain seconds if hours and minutes are both > 0')
  t.end()
})
