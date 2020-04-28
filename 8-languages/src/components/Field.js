import React from 'react'
// INTEGRATE THE CONTEXT INTO THE COMPONENT
import LanguageContext from '../contexts/LanguageContext'
// BRING A CONFIGURATION OBJECT TO AVOID HARDCODED CONTENT
import configObj from '../config/FormConfig'

class Field extends React.Component {
  /*
    HERE YOU ARE SETTING THE CONTEXT BASED ON THE IMPORT ABOVE
    USING THAT MIXED IMPLEMENTATION YOU CAN IMPORT THE CONTEXT TO GET THE VALUES AND METHODS
    OR THE STORE COMPONENT TO GENERATE THE CONTEXT ON A HIGHER LEVEL
  */
  static contextType = LanguageContext 
  
  /*
    WHEN THE COMPONENT IS GOING TO RENDER, THE CONTEXT WILL GIVE THE STRING WHICH IS
    RELATED TO A CONFIGURATION OBJECT WITH ITS TEXTS LOADED, SO THIS STATEMENT WILL RETURN
    THE CONTENTS RELATED TO THE LANGUAGE SELECTED BY THE USER
  */
  render() {
    const { labelText } = configObj[this.context.language]
    return (
      <div>
        <label>{labelText}</label>
        <input type="text" />
      </div>
    )
  }
}

export default Field