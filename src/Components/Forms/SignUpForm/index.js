import React from 'react';
import { Field, reduxForm } from 'redux-form'
import {validate, RenderField} from "../../common/RenderField.js"


let SignUpForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="firstName" component={RenderField} type="text"
          placeholder="Enter your first Name" label="Your first name"/>
        </div>
        <div>
          <Field name="lastName" component={RenderField} type="text"
          placeholder="Enter your last Name" label="Your last name"/>
        </div>
        <div>
          <Field name="email" component={RenderField} type="email"
          placeholder="Enter your email" label="Email"/>
        </div>
        <div>
          <Field name="password" component={RenderField} type="password"
          placeholder="Enter your password" label="Password"/>
        </div>
        <div>
          <Field name="confirmPassword" component={RenderField} type="password"
          placeholder="Confirm your password" label="Password confirmation"/>
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

SignUpForm = reduxForm({
  form: 'signUp',
  validate
})(SignUpForm)

export default SignUpForm
