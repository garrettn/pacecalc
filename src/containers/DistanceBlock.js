import { connect } from 'react-redux'
import SetDistance from 'components/SetDistance/SetDistance'
import { selectDistance } from 'store/selectors'
import { setDistanceValue } from 'store/actions/distance'

function mapStateToProps (state) {
  return {
    distance: selectDistance(state)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onDistanceValueChange: (value) => {
      dispatch(setDistanceValue(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SetDistance)
