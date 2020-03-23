import React from 'react'
// IMPORT COMPONENTS
import SearchBar from './SearchBar'
// import SemanticImageList from './SemanticImageList'
import ImageList from './ImageList'
// IMPORT API DATA
import unsplash from '../api/unsplash'

class App extends React.Component {
  state = { images: [] }
  render() {
    const onSearchSubmit = async (data) => {
      const result = data.length ? 
        await unsplash.get(
          '/search/photos',
          {
            params: {
              query: data
            }
          }
        ) : await []
      
      this.setState({ images: (result.data && result.data.results) || result})
    }

    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSearchSubmit={onSearchSubmit} />
        {/* <SemanticImageList images={this.state.images} /> */}
        <ImageList images={this.state.images} />
      </div>
    )
  }
}

export default App