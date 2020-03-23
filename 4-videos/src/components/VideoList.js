import React from 'react'
import VideoItem from './VideoItem'

class VideoList extends React.Component {

  render() {
    /*
      WHEN YOU GET THE 'onSelectVideo' FUNCTION PROP FROM THE FATHER COMPONENT,
      YOU JUST HAVE TO PASS IT AS A PROP TO EVERY CHILD COMPONENT WHITHOUT ANY
      MODIFICATION
    */
    const { videos, onSelectVideo } = this.props

    return (
      <div className="ui relaxed divided list">
        {
          videos.map(
            videoItem => {
              return <VideoItem
                key={videoItem.id.videoId}
                video={videoItem}
                onSelectVideo={onSelectVideo}
              />
            }
          )  
        }
      </div>
    )
  }
}

export default VideoList