export const selectedSong = song => {
  // RETURN AN ACTION
  return {
    type: 'SONG_SELECTED',
    payload: song
  }
}