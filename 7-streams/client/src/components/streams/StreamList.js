import React from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions'

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams()
  }

  render() {
    const { streams } = this.props
    
    return (
      <div className="">
        <h2>Streams</h2>
        <div className="ui celled list">
          {
            streams.length &&
            streams.map(
              ({ id, title, description }) => {
              return (
                <div key={id} className="item">
                  <i className="large middle aligned icon camera" />
                  <div className="content">
                    {title}
                    <div className="description">{description}</div>
                  </div>
                </div>
                )
              }
            )
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ streams }) => {
  return { streams: Object.values(streams) }
}

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList)