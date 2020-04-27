import React from 'react'
import Modal from '../Modal'
// THOSE ARE ACTIONS USED TO HANDLE REST ENDPOINTS AND FEED DATA ON THE REDUCERS
import { fetchStream, deleteStream } from '../../actions'
import { connect } from 'react-redux'

class StreamDelete extends React.Component {
  // IN CASE THE USER REFRESH THE PAGE, YOU GET THE STREAM BY FETCHING THE DATA
  // AND RETURNING IT TO THE REDUCER
  async componentDidMount() {
    const { fetchStream, match } = this.props
    await fetchStream(match.params.id)
  }

  onSubmitModal = id => this.props.deleteStream(id)

  render() {
    const { stream } = this.props
    return (
      stream ? 
        <Modal
          title={`Delete stream ${stream.title}`}
          content={`Are you sure you want to delete stream '${stream.title}'?`}
          id={stream.id}
          onSubmit={this.onSubmitModal}
        /> :
        null
    )
  }
}

// YOU GET THE SPECIFIC STREAM FROM THE STREAMS OBJECT LIST USING THE STREAM ID
// OWN PROPS MAKES REFERENCE TO THE PROPS FROM THE COMPONENT ITSELF
const mapStateToProps = ({ streams }, ownProps) =>{
  return { stream: streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete)