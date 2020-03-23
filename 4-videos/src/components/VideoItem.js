import React from 'react'
// IMPORT STYLES
import '../styles/VideoItem.css'

class VideoItem extends React.Component {
  render() {
    /*
      WHEN YOU CLICK ON ANY O THESE ITEMS, IT WILL FIRE THE 'onSelectVideo'
      FUNCTION PROP, WHICK WILL PASS THE VIDEO OBJECT TO THE UPPER
      LEVEL COMPONENTS UNTIL THE OBJ IS USED TO SET THE 'selectedVideo'
      STATE ON THE 'App' COMPONENT
    */
    const { video, onSelectVideo } = this.props

    return (
      <div className="video-item item" onClick={() => onSelectVideo(video)}>
        <img
          className="ui image"
          src={video.snippet.thumbnails.high.url}
          alt={video.snippet.description}
        />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    )
  }
}

export default VideoItem