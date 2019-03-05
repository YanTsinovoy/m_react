import React from 'react';
import { Field, reduxForm } from 'redux-form'
import {validate, RenderField} from "../../common/RenderField.js"

let SignInForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="email" component={RenderField} type="email"
          placeholder="Enter your email" label="Email"/>
        </div>
        <div>
          <Field name="password" component={RenderField} type="password"
          placeholder="Enter your password" label="Password"/>
        </div>
        <div>
          <button type="submit" disabled={submitting}>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    )
  }

SignInForm = reduxForm({
  form: 'signIn',
  validate
})(SignInForm)

export default SignInForm
