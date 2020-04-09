import jsonPlaceholder from '../apis/jsonPlaceHolder'

export const fetchPostAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts())
  
  const users =
    getState().posts
      .map(({ userId }) => userId)
      .filter((value, index, self) => self.indexOf(value) === index)
      
  await Promise.all(users.map(id => dispatch(fetchUser(id))))
}

export const fetchPosts = () => async dispatch => {
  const { data } = await jsonPlaceholder.get('/posts')
  
  dispatch({ type: 'FETCH_POSTS', payload: data })
}

export const fetchUser = userId => async dispatch => {
  const { data } = await jsonPlaceholder.get(`/users/${userId}`)

  dispatch({ type: 'FETCH_USER', payload: data})
}