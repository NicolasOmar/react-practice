import React from 'react'
import UserCreate from './UserCreate'
// HERE YOU ADD THE CONTEXT
import { LanguageStore } from '../contexts/LanguageContext'
import LanguageSelector from './LanguageSelector'

class App extends React.Component {
  // TO SET THE CONTEXT VALUE, YOU NEED TO SER A PROVIDER AROUND THE CHILDREN COMPONENTS
  // AND SET ITS VALUE AS THE STATE VALUE, SO THAT VALUE WILL CHANGE EVERY TIME THE USER CHANGE THE LANGUAGE
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector onLanguageChange={this.changeLanguage} />
          <UserCreate />
        </LanguageStore>
      </div>
    )
  }
}

export default App