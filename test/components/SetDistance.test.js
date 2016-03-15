import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import SetDistance from 'components/SetDistance/SetDistance'

test('<SetDistance />', function (t) {
  const distance = {
    value: 5,
    unit: 'km'
  }
  const onDistanceValueChange = spy()
  const wrapper = shallow(<SetDistance distance={distance} onDistanceValueChange={onDistanceValueChange} />)
  t.equals(wrapper.find('input').length, 1, 'has one input')

  const input = wrapper.find('input').at(0)
  t.equals(input.prop('type'), 'number', 'input is a number')
  t.equals(input.prop('value'), distance.value, 'value of the input is the passed-in distance.value prop')
  t.notEquals(wrapper.text().indexOf(distance.unit), -1, 'includes the distance unit')

  input.simulate('change', { target: { value: 17 } })
  t.ok(onDistanceValueChange.calledWith(17), 'onDistanceValueChange gets called when input value changes')
  t.end()
})
