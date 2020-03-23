import React from 'react'
// IMPORT STYLES
import './styles/ImageList.css'
import ImageCard from './ImageCard'

class ImageList extends React.Component {
  render() {
    return (
      <div className="image-list">
      {
        this.props.images.map(
          ({
            id,
            urls,
            alt_description,
          }) => <ImageCard key={id} urls={urls} description={alt_description}/>
        )
      }
      </div>
    )
  }
}

export default ImageList