import React from 'react'
// IMPORT COMPONENTS
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
// IMPORT YOUTUBE API
import youtube from '../apis/youtube'

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  onSubmit = async (term) => {
    // HERE YOU USE A ACCESS KEY TO USE YOUTUBE API
    const KEY = 'AIzaSyC03gvCITbdNuoI_NnJEAE-4xjPh0lc1qU'
    
    // YOU MAKE A AXIOS GET REQUEST (IMPORTING A DEFAULT AXIOS CONFIG)
    const response = await youtube.get(
      '/search',
      {
        params: {
          q: term,
          part: 'snippet',
          maxResults: 5,
          type: 'video',
          key: KEY
        }
      }
    )

    // AFTER GET THE RESPONSE (IS A PROMISE RESULT), YOU SET THAT RESULT IN THE STATE
    this.setState({ videos: response.data.items})
  }

  /*
    THE 'onSelectVideo' FUNCTION SETS THE 'stateVideo' WITH THE VIDEO YOU SELECT ON
    THE 'VideoItem'. TO GET THAT VIDEO, YOU NEED TO INJECT THE FUNCTION AS A PROP THROUG
    THE 'VideoList' COMPONENT AND TO ITS CHILDREN
  */
  onSelectVideo = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onSelectVideo={this.onSelectVideo}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App