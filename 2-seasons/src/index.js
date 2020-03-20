import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// LOAD COMPONENTS
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
// LOAD CONFIGURATION STRINGS
import strings from './config/strings'

// YOU CREATE A CLASS WHICH NEEDS TO BE EXTENDED FROM REACT.COMPONENT (YOU CAN CALL IT IN THAT WAY TOO)
class App extends Component {
  /*
    TO USE STATES, CALL THE CONSTRUCTOR AND THE SUPER FUNCTION TO RELATE THE REACT.COMPONENT PROPERTIES AND FUNCTIONS INTO THE NEW CLASS
  */
  constructor(props) {
    super(props);

    // YOU CAN SET YOUR STATE OBJECT WITHOUT A CONSTRUCTOR JUST ASSIGNING STATE = {}
    this.state = {
      latitude: null,
      error: null
    }
  }

  componentDidMount() {
    /*
      TO UPDATE A STATE, YOU HAVE TO CALL 'SETSTATE' FUNCTION, GIVING AN OBJECT WITH THE PROPS THAT YOU WANT TO UPDATE
    */
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),
      (error) => this.setState({ error: strings.error})
    )
  }

  render() {    
    return (
      <div>
        {
          this.state.error ||
          (this.state.latitude && <SeasonDisplay latitude={this.state.latitude} />) ||
          <Spinner message={strings.pleaseAcceptLocation} />
        }
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)