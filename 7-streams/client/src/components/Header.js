import React from 'react'
// USED TO SEND THE USER TO A DESIRED PART OF THE PAGE
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'

class Header extends React.Component {
  render () {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Streamer App
        </Link>
        <div className="right menu">
          <Link to="/" className="item">
            All Streams
          </Link>
          <GoogleAuth />
        </div>
      </div>
    )
  }
}

export default Header