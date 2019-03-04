import React, { Component } from 'react';

class SignUp extends Component {
  state ={
      signUp: {
        firstName: {
          value: "",
          valid: false,
          config: {
            name: "firstName",
            type: "text",
            placeholder: "enter your first name"
          }
        },
        lastName: {
          value: "",
          valid: false,
          config: {
            name: "lastName",
            type: "text",
            placeholder: "enter your first name"
          }
        },
        email: {
          value: "",
          valid: false,
          config: {
            name: "email",
            type: "email",
            placeholder: "enter your email"
          }
        },
        password: {
          value: "",
          valid: false,
          config: {
            name: "password",
            type: "password",
            placeholder: "enter your password"
          }
        },
        confirmPassword: {
          value: "",
          valid: false,
          config: {
            name: "password",
            type: "password",
            placeholder: "confirm your password"
          }
      }
    },
    isValid: false
  }
  render(){
    let {signUp, isValid} = this.state
    return (
      <div>
        {/*ЗДЕСЬ МОЖЕТ БЫТЬ ВАША РЕКЛАМА*/}
      </div>
    )
  }
}
