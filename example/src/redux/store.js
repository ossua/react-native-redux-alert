import { createStore, combineReducers } from 'redux'
import { alertReducer } from 'react-native-redux-alert'

const reducers = combineReducers({
  alertReducer,
})

export default createStore(reducers)
