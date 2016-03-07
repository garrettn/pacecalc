import { connect } from 'react-redux'
import ShowPace from 'components/ShowPace/ShowPace'
import {
  calculatePaceString,
  selectPaceDistanceUnit
} from 'store/selectors'

function mapStateToProps (state) {
  return {
    paceTimeString: calculatePaceString(state),
    paceDistanceUnit: selectPaceDistanceUnit(state)
  }
}

export default connect(mapStateToProps)(ShowPace)
