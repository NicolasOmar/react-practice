import React from 'react'
import { connect } from 'react-redux'
import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm'

class StreamEdit extends React.Component {
  async componentDidMount() {
    const { fetchStream, match } = this.props
    await fetchStream(match.params.id)
  }

  onSubmitEdit = formValues => {
    const { editStream, stream } = this.props
    editStream(stream.id, formValues)
  }

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

const mapStateToProps = ({ streams }, ownProps) =>{
  return { stream: streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit)