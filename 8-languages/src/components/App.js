import React from 'react'
import UserCreate from './UserCreate'
// HERE YOU ADD THE CONTEXT
import LanguageContext from '../contexts/LanguageContext'

class App extends React.Component {
  state = {
    language: 'english'
  }

  changeLanguage = lang => this.setState({ language: lang })

  // TO SET THE CONTEXT VALUE, YOU NEED TO SER A PROVIDER AROUND THE CHILDREN COMPONENTS
  // AND SET ITS VALUE AS THE STATE VALUE, SO THAT VALUE WILL CHANGE EVERY TIME THE USER CHANGE THE LANGUAGE
  render() {
    return <div className="ui container">
      <div>
        Select a language:
        <i onClick={() => this.changeLanguage('english')} className="flag us" />
        <i onClick={() => this.changeLanguage('dutch')} className="flag nl" />
      </div>
      <LanguageContext.Provider value={this.state.language}>
        <UserCreate />
      </LanguageContext.Provider>
    </div>
  }
}

export default App