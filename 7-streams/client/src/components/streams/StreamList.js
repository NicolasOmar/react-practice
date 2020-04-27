import React from 'react'
import { connect } from 'react-redux'
// THOSE ARE ACTIONS USED TO HANDLE REST ENDPOINTS AND FEED DATA ON THE REDUCERS
import { fetchStreams } from '../../actions'
import { Link } from 'react-router-dom'

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams()
  }

  // RENDER HELPER TO SEPARATE CODE AND ANALYZE IT BETTER
  renderAdminBtn = stream => {
    return stream.userId === this.props.userId ?
      (
        <div className="right floated content">
          <Link
            to={`/streams/edit/${stream.id}`}
            className="ui button primary"
          >
            EDIT
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui button negative"
          >
            DELETE
          </Link>
        </div>
      ) :
      null
  }

  render() {
    const { streams, isSignedIn } = this.props    
    
    return (
      <div className="content">
        <h2>Streams</h2>
        <div className="ui celled list">
          {
            streams.length ?
            streams.map(stream => {
              return (
                <div key={stream.id} className="item">
                  {this.renderAdminBtn(stream)}
                  <i className="large middle aligned icon camera" />
                  <div className="content">
                    {stream.title}
                    <div className="description">{stream.description}</div>
                  </div>
                </div>
                )
              }
            ) :
            null
          }
          {
            isSignedIn && (
              <div>
                <Link to="/streams/new" className="ui button primary">
                  Create Stream
                </Link>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ streams, auth }) => {
  return {
    streams: Object.values(streams),
    ...auth
  }
}

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList)