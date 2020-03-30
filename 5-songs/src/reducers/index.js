import { combineReducers } from 'redux'

// HERE YOU HAVE A STORE WITH THE SONGS FOR THIS EXCERCISE
const songsReducer = () => {
  return [
    {
      title: 'First song',
      duration: '4:05'
    }, {
      title: 'Second song',
      duration: '3:05'
    }, {
      title: 'Third song',
      duration: '2:05'
    }, {
      title: 'Fourth song',
      duration: '1:05'
    }
  ]
}

// HERE YOU HAVE A REDUCER BASED ON A FUNCTION WHICH SELECTS A SONG
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong
}

// TO USE ALL THE REDUCERS IN THE APP, YOU NEED TO COMBINE THEM LIKE AN OBJECT IN THIS WAY
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})