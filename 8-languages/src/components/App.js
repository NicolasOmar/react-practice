import React from 'react'
// HERE YOU ADD THE CONTEXT AS A COMPONENT
import { LanguageStore } from '../contexts/LanguageContext'
// HERE YOU ADD THE IMPORTED COMPONENTS
import UserCreate from './UserCreate'
import LanguageSelector from './LanguageSelector'

class App extends React.Component {
  /*
    INSTEAD IMPORTNG A CONTEXT PROVIDER, YOU IMPORT THE LANGUAGESTORE COMPONENT AND USE IT
    ABOVE THE OTHER COMPONENTS USING THAT IMPLEMENTATION YOU INJECT THE VALUE OBJECT ON
    THE CHILDREN COMPONENTS
  */
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <UserCreate />
        </LanguageStore>
      </div>
    )
  }
}

export default App