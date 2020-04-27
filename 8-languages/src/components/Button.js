import React from 'react'
// INTEGRATE THE CONTEXT INTO THE COMPONENT
import LanguageContext from '../contexts/LanguageContext'
// BRING A CONFIGURATION OBJECT TO AVOID HARDCODED CONTENT
import configObj from '../config/FormConfig'

class Button extends React.Component {
  // USING THIS WAY YOU HAVE TO HANDLE THE VALUE RETURNED FROM THE CONSUMER FUNCION OUTPUT
  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          { value => configObj[value].buttonText }
        </LanguageContext.Consumer>
      </button>
    )
  }
}

export default Button