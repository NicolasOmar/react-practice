import React from 'react'
// LOAD CONFIGURATION STRINGS
import strings from './config/strings'

class Spinner extends React.Component {
  render() {
    return (
      <div className="ui active dimmer">
        <div className="ui big text loader">
          {this.props.message}
        </div>
      </div>
    )
  }
}

Spinner.defaultProps = {
  message: strings.loading
}

export default Spinner