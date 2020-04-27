import React from 'react'
import Modal from '../Modal'
import { fetchStream, deleteStream } from '../../actions'
import { connect } from 'react-redux'

class StreamDelete extends React.Component {
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

const mapStateToProps = ({ streams }, ownProps) =>{
  return { stream: streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete)