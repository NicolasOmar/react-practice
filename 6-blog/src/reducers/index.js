import { combineReducers } from 'redux'
import postsReducers from './postsReducer'
import usersReducers from './usersReducer'

export default combineReducers({
  posts: postsReducers,
  users: usersReducers
})