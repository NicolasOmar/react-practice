import React from 'react'
import { connect } from 'react-redux'
// THOSE ARE ACTIONS USED TO HANDLE REST ENDPOINTS AND FEED DATA ON THE REDUCERS
import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm'

class StreamEdit extends React.Component {
  // IN CASE THE USER REFRESH THE PAGE, YOU GET THE STREAM BY FETCHING THE DATA
  // AND RETURNING IT TO THE REDUCER
  async componentDidMount() {
    const { fetchStream, match } = this.props
    await fetchStream(match.params.id)
  }

  onSubmitEdit = formValues => {
    const { editStream, stream } = this.props
    editStream(stream.id, formValues)
  }

  // YOU RENDER A COMMON COMPONENT HAS STREAMFORM, GIVING IT THE INITIAL VALUES AND THE SUBMIT LOGIC
  render() {
    const { title, description } = this.props.stream
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          onSubmit={this.onSubmitEdit}
          initialValues={{ title, description }}
        />
      </div>
    )
  }
}

// YOU GET THE SPECIFIC STREAM FROM THE STREAMS OBJECT LIST USING THE STREAM ID
// OWN PROPS MAKES REFERENCE TO THE PROPS FROM THE COMPONENT ITSELF
const mapStateToProps = ({ streams }, ownProps) =>{
  return { stream: streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit)