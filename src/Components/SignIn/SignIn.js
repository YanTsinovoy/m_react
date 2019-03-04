import React, { Component } from 'react';

class SignIn extends Component {
  state ={
      signIn: {
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
      }
    },
    isValid: false
  }
  validator = value => {
  let isValid = true;
  isValid = value.trim() !== "" && isValid;
  isValid = value.length >= 8 && isValid;
  return isValid;
};
  change = e => {
    const { name, value } = e.target
    let valid = this.validator(value)
    const otherValid = Object.keys(this.state.signIn).every(el => this.state.signIn[el].valid)
    this.setState({
      signIn: {
        ...this.state.signIn,
        [name]: {
          ...this.state.signIn[name],
          value,
          valid
        }
      },
      isValid: valid && otherValid
    })
  }
  render(){
    let {signIn, isValid}= this.state
    console.log(signIn, isValid);
    return(
      <div>
        <form>
        {Object.keys(signIn).map((inp, ind) => (
          <input name={signIn[inp].config.name}
          key={ind}
          type={signIn[inp].config.type}
          placeholder={signIn[inp].config.placeholder}
          value={signIn[inp].value}
          onChange={this.change}/>
        ))}
        <button disabled={!isValid} type="submit"> submit</button>
        </form>
      </div>
    )
  }
}

export default SignIn
