import React from 'react'
// INTEGRATE THE CONTEXT INTO THE COMPONENT
import LanguageContext from '../contexts/LanguageContext'

class LanguageSelector extends React.Component {
  /*
    HERE YOU ARE SETTING THE CONTEXT BASED ON THE IMPORT ABOVE
    USING THAT MIXED IMPLEMENTATION YOU CAN IMPORT THE CONTEXT TO GET THE VALUES AND METHODS
    OR THE STORE COMPONENT TO GENERATE THE CONTEXT ON A HIGHER LEVEL
  */
  static contextType = LanguageContext

  /*
    TO CHANGE THE CONTEXT VALUE BASED ON THE CLICKED FLAG, YOU WILL CALL THE METHOD ON THE CONTEXT
    LEVEL
  */
  render() {
    return (
      <div>
        Select a language:
        <i onClick={() => this.context.onLanguageChange('english')} className="flag us" />
        <i onClick={() => this.context.onLanguageChange('dutch')} className="flag nl" />
      </div>
    )
  }
}

export default LanguageSelector