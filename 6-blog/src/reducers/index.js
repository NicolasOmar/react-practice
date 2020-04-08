import { combineReducers } from 'redux'
import postReducers from './postReducer'

export default combineReducers({
  posts: postReducers
})