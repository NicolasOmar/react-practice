import React from 'react'
import moment from 'moment'

class ImageList extends React.Component {
  render() {
    return (
      <div className="ui link cards">
      {
        this.props.images.map(
          ({
            id,
            urls,
            description,
            alt_description,
            user,
            created_at,
            likes
          }) => 
            <div className="ui card" key={id}>
              <div className="image">
                <img src={urls.raw} alt={alt_description} />
              </div>
              <div className="content">
                <a className="header" href="./">{user.name}</a>
                <div className="meta">
                  <span className="date">Uploaded at {moment(created_at).format('DD/MM/YYYY')}</span>
                </div>
                <div className="description">
                  {description || alt_description}
                </div>
              </div>
              <div className="extra content">
                <a href="./">
                  <i className="user icon"></i>
                  {`${likes} ${likes === 1 ? 'like' : 'likes'}`}
                </a>
              </div>
            </div>
        )
      }
      </div>
    )
  }
}

export default ImageList