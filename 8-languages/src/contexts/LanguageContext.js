import React from 'react'

// NEEDS TO HAVE A CAPITAL C BECAUSE REACT WILL RENDER IT AS A COMPONENT IN JSX
const Context = React.createContext('english');

export class LanguageStore extends React.Component {
  // FIRST YOU SET THE STATE PROPS
  state = {
    language: 'english'
  }

  // SECOND YOU CREATE A METHOD TO CHANGE THAT STATE
  onLanguageChange = language => this.setState({ language })

  /*
    IN THE RENDER METHOD YOU RETURN A PROVIDER USING THE CREATED CONTEXT WITH A CUSTOM OBJECT
    AS VALUE THAT VALUE HOLD THE STATE VALUE AND THE METHOD IN CHARGE OF SET THE STATE (PART OF
    THE CONTEXT VALUE OBJECT)
  */
  render() {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Context

/*
  THE POINT OF EXPORT A CONTEXT AND A CLASS SPEPARATED IS GIVE THE POSSIBILITY OF:
    USE THE CONTEXT TO GET ITS DATA AND METHODS TO CHANGE THAT DATA
    USE THE STORE CLASS AS A COMPONENT TO INJECT THE CONTEXT DATA ON THE CHILDREN COMPONENTS
*/