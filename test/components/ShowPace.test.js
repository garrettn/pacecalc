import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import ShowPace from 'components/ShowPace/ShowPace'

test('<ShowPace />', function (t) {
  const paceTimeString = '5:45'
  const paceDistanceUnit = 'km'
  const wrapper = shallow(
    <ShowPace
      paceTimeString={paceTimeString}
      paceDistanceUnit={paceDistanceUnit} />)

  t.notEquals(wrapper.text().indexOf(paceTimeString), -1, 'displays paceTimeString')
  t.notEquals(wrapper.text().indexOf(paceDistanceUnit), -1, 'displays paceDistanceUnit')
  t.end()
})
