import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import SetTime from 'components/SetTime/SetTime'

test('<SetTime />', function (t) {
  const time = {
    hours: 3,
    minutes: 23,
    seconds: 35
  }
  const onHoursChange = spy()
  const onMinutesChange = spy()
  const onSecondsChange = spy()
  const wrapper = shallow(
    <SetTime
      time={time}
      onHoursChange={onHoursChange}
      onMinutesChange={onMinutesChange}
      onSecondsChange={onSecondsChange} />)

  const inputs = wrapper.find('input')
  t.equals(inputs.length, 3, 'has 3 inputs')

  const hoursInput = inputs.at(0)
  t.equals(hoursInput.prop('type'), 'number', 'hours input is a number input')
  t.equals(hoursInput.prop('value'), time.hours, 'hours input has passed-in hours value')
  t.equals(hoursInput.prop('min'), '0', 'hours input has a min of 0')
  hoursInput.simulate('change', { target: { value: 2 } })
  t.ok(onHoursChange.calledWith(2), 'onHoursChange gets called when hours value changes')

  const minutesInput = inputs.at(1)
  t.equals(minutesInput.prop('type'), 'number', 'minutes input is a number input')
  t.equals(minutesInput.prop('value'), time.minutes, 'minutes input has passed-in minutes value')
  t.equals(minutesInput.prop('min'), '0', 'minutes input has a min of 0')
  t.equals(minutesInput.prop('max'), '60', 'minutes input has a max of 60')
  minutesInput.simulate('change', { target: { value: 17 } })
  t.ok(onMinutesChange.calledWith(17), 'onMinutesChange gets called when minutes value changes')

  const secondsInput = inputs.at(2)
  t.equals(secondsInput.prop('type'), 'number', 'seconds input is a number input')
  t.equals(secondsInput.prop('value'), time.seconds, 'seconds input has passed-in seconds value')
  t.equals(secondsInput.prop('min'), '0', 'seconds input has a min of 0')
  t.equals(secondsInput.prop('max'), '60', 'seconds input has a max of 60')
  secondsInput.simulate('change', { target: { value: 42 } })
  t.ok(onSecondsChange.calledWith(42), 'onSecondsChange gets called when seconds value changes')
  t.end()
})
