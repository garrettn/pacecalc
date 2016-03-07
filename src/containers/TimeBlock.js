import { connect } from 'react-redux'
import SetTime from 'components/SetTime/SetTime'
import { selectTime } from 'store/selectors'
import {
  setTimeHours,
  setTimeMinutes,
  setTimeSeconds
} from 'store/actions/time'

function mapStateToProps (state) {
  return {
    time: selectTime(state)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onHoursChange: (value) => {
      dispatch(setTimeHours(value))
    },
    onMinutesChange: (value) => {
      dispatch(setTimeMinutes(value))
    },
    onSecondsChange: (value) => {
      dispatch(setTimeSeconds(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SetTime)
