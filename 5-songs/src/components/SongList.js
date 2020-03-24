import React from 'react'
import { connect } from 'react-redux'

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map(
      (song, i) => {
        return (
          <div key={i} className="item">
            <div className="right floated content">
              <button className="ui button primary">
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

export default connect(mapStateToProps)(SongList)