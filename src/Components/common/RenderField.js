import React from 'react'


const validate = values => {
  const errors = {}
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 6) {
    errors.password = 'password must be longer than 6 characterss'
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Required'
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords must match'
    errors.password = "Passwords must match"
  }

  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less'
  } else if (values.firstName.length === 1) {
    errors.firstName = "Name cannot consist of one character"
  }  else if (values.firstName.match(/\d+/)){
    errors.firstName = "Name cannot contain numbers"
  } else if (values.firstName === values.lastName){
    errors.firstName = "Name and surname cannot be the same"
  }

  if (!values.lastName) {
    errors.lastName = 'Required'
  } else if (values.lastName.length > 15) {
    errors.lastName = 'Must be 15 characters or less'
  } else if (values.lastName.length === 1) {
    errors.lastName = "Last name cannot consist of one character"
  }  else if (values.lastName.match(/\d+/)){
    errors.lastName = "Last name cannot contain numbers"
  } else if (values.lastName === values.firstName){
    errors.lastName = "Last name and name cannot be the same"
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const RenderField = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error }
}) => (
  <div className="input-box">
    <label className="input-box__label">{label}</label>
    <div>
      <input className="input-box__input"{...input} placeholder={placeholder} type={type} />
      {touched &&
        ((error && <span className="input-box__error">{error}</span>))}
    </div>
  </div>
)

export {validate, RenderField}
