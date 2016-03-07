import { SET_DISTANCE_VALUE } from 'store/constants'

const initialState = {
  value: 3,
  unit: 'mi'
}

export default function distance (state = initialState, action) {
  switch (action.type) {
    case SET_DISTANCE_VALUE:
      return { ...state, value: action.payload }
    default:
      return state
  }
}
