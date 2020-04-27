import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer'
import streamReducer from './streamReducer'

// COMBINIG REDUCERS IS THE WAY TO CALL THEM IN ANY COMPONENT FROM THE 'CONNECT' FUNCITON
export default combineReducers({
  auth: authReducer,
  streams: streamReducer,
  form: formReducer
})