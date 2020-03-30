import React from 'react'
import { connect } from 'react-redux'
// THIS IS TREATED AS A JS FUNCTION
import { selectedSong } from '../actions'

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map(
      (song, i) => {
        return (
          <div key={i} className="item">
            <div className="right floated content">
              <button className="ui button primary" onClick={() => this.props.selectedSong(song)}>
                Select
              </button>
            </div>

            <div className="content">
            {`${song.title} - ${song.duration}`}
            </div>
          </div>
        )
      }
    )
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>
  }
}

const mapStateToProps = ({songs}) => {
  return {songs}
}

/*
    TO GET THE SONGS AS A PROP USING REDUCERS, FIRST YOU HAVE USE THE 'CONNECT' FUNCTION WHICH USES 
  THE CUSTOM FUNCTION 'mapStateToProps' AS AN ARGUMENT, THAT FUNCTION RETURNS AN OBJECT WITH ALL 
    THE COMBINED REDUCERS ({ songs, selectedSong }).
  WHEN TOU GET THE REDUCERS PROPERTIES THAT YOU NEED, YOU RETURN IT IN THAT 'mapStateToProps' FUNCTION.
    AT LAST, THE RETURNED OBJECT WILL BE SENDED TO ANOTHER FUNCTION WHICH NEED THE COMPONENT WHICH WILL USE
  THOSE REDUCERS PROPERTIES (NOW CONVERTED AS PROPS)
*/
/*
  THE SECOND ARGUMENT OF THE CONNECT FUNCTION WRAPS ANY ACTION CREATOR INSIDE THE STORE TO MAKE IT WORK
  IN CASE YOU WANT TO USE 'selectedSong' AS THE IMPORTED FUNCTIONS, IT WILL NOT IMPACT ON THE REDUX STORES
  AND YOU WILL NOT GET A UPDATED STATUS
*/
export default connect(mapStateToProps, { selectedSong })(SongList)