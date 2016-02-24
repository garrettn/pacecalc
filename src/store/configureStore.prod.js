import { createStore } from 'redux'
import rootReducer from 'store/reducers/root'

export default function configureStore (initialState) {
  return createStore(rootReducer, initialState)
}
