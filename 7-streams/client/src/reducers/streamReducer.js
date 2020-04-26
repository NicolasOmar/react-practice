import {
  CREATE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAMS
} from '../config/types'
import { mapKeys, omit } from 'lodash'

export default (state = {}, action) => {
  const { payload } = action

  switch (action.type) {
    case FETCH_STREAM:
      return { ...state, [payload.id]: payload }
    case FETCH_STREAMS:
      return { ...state, ...mapKeys(payload, 'id')}
    case CREATE_STREAM:
      return { ...state, [payload.id]: payload }
    case EDIT_STREAM:
      return { ...state, [payload.id]: payload } 
    case DELETE_STREAMS:
      return omit(state, payload)
    default:
      return state
  }
}