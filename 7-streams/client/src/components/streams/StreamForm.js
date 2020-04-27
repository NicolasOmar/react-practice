import React from 'react'
import { Field, reduxForm } from 'redux-form'

// THIS IS A COMMON COMPONENT CREATED TO HANDLE SIMILAR BEHAVIOURS IN DIFFERENT COMPONENTS WITH SAME STRUCTURE
// (IN THIS CASE, A FORM)
class StreamForm extends React.Component {
  // THIS FUNCTION IS NEEDED TO RENDER EACH PROP IN A INPUT
  renderInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        { meta.touched && <div className="ui error message">TEST</div> }
      </div>
    )
  }

  onSubmit = data => this.props.onSubmit(data)

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary" type="submit">Submit</button>
      </form>
    )
  }
}

// REDUX FORM IS USED TO LINK PROPERTIES IN A REDUCER AVOIDING REDUCER/ACTION LOGIC, FOCUSING ON OTHER PARTES
export default reduxForm({
  form: 'streamForm'
})(StreamForm)