import React from 'react'
import { connect } from 'react-redux'

class SongDetail extends React.Component{
  render() {
    return <div>{this.props.song && `${this.props.song.title} - ${this.props.song.duration}`}</div>
  }
}

const mapStateToProps = state => {
  return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)