import React from 'react'

class VideoDetail extends React.Component {
  render() {
    const { video } = this.props
    const videoSrc = video && `https://www.youtube.com/embed/${video.id.videoId}`

    return (
      <div>
        {
          video &&
            (
              <div>
                <div className="ui embed">
                  <iframe src={videoSrc} title={video.snippet.title} />
                </div>
                <div className="ui segment">
                  <h4 className="ui header">{video.snippet.title}</h4>
                  <p>{video.snippet.description}</p>
                </div>
              </div>
            )
        }
      </div>
    )
  }
}

export default VideoDetail