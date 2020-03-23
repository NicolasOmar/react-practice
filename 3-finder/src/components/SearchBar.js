import React from 'react'

class SearchBar extends React.Component {
  /*
    USING A STATE PROPERTY TO HANDLE INPUT´S VALUE IS PART OF MAKE A CONTROLLED ELEMENT
    THAT CONCEPT RELIES ON HANDLE THE DOM INFORMATION (AN INPUT VALUE IN THIS CASE) ON
    A JAVASCRIPT VARIABLE (OR STATE PROPERTY HERE) INSTED LOOK FOR THE DOM INFORMATION
    THAT HELPS TO HAVE A BETTER TRACK OF HOW THE DATA IS BEEN HANDLED ON THE COMPONENT
  */
  state = {
    term: ''
  }

  /*
    TO GET ANY STATE PROPERTY VALUE, USE IT INSIDE A ARROW FUNCTION '() => {}' BECAUSE THE 'this' WORD
    WILL BE USE THE CONTEXT OF THE GLOBAL OBJECT IN THE ARROW FUNCTION (WHERE STATE IS) INSTEAD USE
    THE FUNCTION CONTEXT ON A CLASSIC FUNCTION 'function() {}'
  */
  onFormSubmit = event => {
    // THE DEFAULT BEHAVIOUR WILL BE STOPPED WITH THIS LINE (SUBMIT A FORM PRESSING ENTER KEY ON THE ANY FORM INPUT)
    event.preventDefault()
    this.props.onSearchSubmit(this.state.term)
  }
  
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(evt) => this.setState({ term: evt.target.value })}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar