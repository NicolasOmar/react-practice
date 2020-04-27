import React from 'react'
import { connect } from 'react-redux'
// THOSE ARE ACTIONS USED TO HANDLE REST ENDPOINTS AND FEED DATA ON THE REDUCERS
import { fetchStream } from '../../actions'
import flv from 'flv.js'

class StreamShow extends React.Component {
  constructor(props) {
    super(props)

    // YOU CREATE A REFERENCE TO A DOM BASED ON THE CREATEREF FUNCTION
    // THIS PROPERTY IS GOING TO BE USED AS A 'REF' REFERENCE IN THE VIDEO DOM TO HANDLE IT
    this.videoRef = React.createRef()
  }

  // IN CASE THE USER REFRESH THE PAGE, YOU GET THE STREAM BY FETCHING THE DATA
  // AND RETURNING IT TO THE REDUCER
  async componentDidMount() {
    const { fetchStream, match } = this.props
    await fetchStream(match.params.id)

    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${match.params.id}.flv`
    })
    this.player.attachMediaElement(this.videoRef.current)
    this.player.load()
  }

  componentWillUnmount() {
    this.player.destroy()
  }

  render() {
    if (!this.props.stream) {
      return null
    }

    const { title, description } = this.props.stream
    
    return (
      <div>
        <video ref={this.videoRef} style={{ width: '100%' }} controls/>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    )
  }
}

// YOU GET THE SPECIFIC STREAM FROM THE STREAMS OBJECT LIST USING THE STREAM ID
// OWN PROPS MAKES REFERENCE TO THE PROPS FROM THE COMPONENT ITSELF
const mapStateToProps = ({ streams }, ownProps) =>{
  return { stream: streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow)