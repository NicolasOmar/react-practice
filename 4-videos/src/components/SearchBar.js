import React from 'react'

class SearchBar extends React.Component {
  state = { term: '' }

  onChangeValue = evt => this.setState({ term: evt.target.value})

  onFormSubmit = event => {
    event.preventDefault()

    this.state.term.length && this.props.onSubmit(this.state.term)
  }
  
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input type="text" value={this.state.term} onChange={this.onChangeValue} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar