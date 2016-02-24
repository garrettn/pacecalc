import { createStore, compose } from 'redux'
import rootReducer from 'store/reducers/root'
import DevTools from 'containers/DevTools'

const enhancer = compose(
  DevTools.instrument()
)

export default function configureStore (initialState) {
  return createStore(rootReducer, initialState, enhancer)
}
