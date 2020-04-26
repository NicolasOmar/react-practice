import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamForm extends React.Component {
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

export default reduxForm({
  form: 'streamForm'
})(StreamForm)