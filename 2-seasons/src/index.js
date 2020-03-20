import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import strings from './config/strings'
import SeasonDisplay from './SeasonDisplay';

// YOU CREATE A CLASS WHICH NEEDS TO BE EXTENDED FROM REACT.COMPONENT (YOU CAN CALL IT IN THAT WAY TOO)
class App extends Component {
  /*
    TO USE STATES, YOU FRIST NEED TO CALL THE CONSTRUCTOR AND THE SUPER FUNCTION TO RELATE THE 
    REACT.COMPONENT PROPERTIES AND FUNCTIONS INTO THE NEW CLASS
  */
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      error: null
    }
  }

  componentDidMount() {
    /*
      TO UPDATE AN STATE, YOU HAVE TO CALL 'SETSTATE' FUNCTION, GIVING AN OBJECT WITH THE PROPS
      THAT YOU WANT TO UPDATE
    */
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),
      (error) => this.setState({ error: strings.error})
    )
  }

  render() {    
    return (
      <h1>
        {
          this.state.error ||
          (this.state.latitude && <SeasonDisplay latitude={this.state.latitude} />) ||
          `${strings.loading}`
        }
      </h1>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)