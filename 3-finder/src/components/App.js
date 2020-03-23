import React from 'react'
// IMPORT PACKAGES
import axios from 'axios'
// IMPORT COMPONENTS
import SearchBar from './SearchBar'
// IMPORT IDS
import dataConfig from '../config/data'

const App = () => {
  const onSearchSubmit = async (data) => {
    const result = data.length ? 
      await axios.get(
        'https://api.unsplash.com/search/photos',
        {
          headers: {
            Authorization: `Client-ID ${dataConfig.CLIENT_ID}`
          },
          params: {
            query: data
          }
        }
      ) : await null
    
    console.warn((result && result.data.results) || 'Please, write a word to find images')
  }

  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar onSearchSubmit={onSearchSubmit} />
    </div>
  )
}

export default App