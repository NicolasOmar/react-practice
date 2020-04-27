import React from 'react'
import { connect } from 'react-redux'
// THOSE ARE ACTIONS USED TO HANDLE REST ENDPOINTS AND FEED DATA ON THE REDUCERS
import { createStream } from '../../actions'
import StreamForm from './StreamForm'

class StreamCreate extends React.Component {
  onSubmitCreation = data => this.props.createStream(data)

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmitCreation} />
      </div>
    )
  }
}

export default connect(null, { createStream })(StreamCreate)