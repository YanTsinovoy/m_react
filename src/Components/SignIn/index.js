import React, { Component } from 'react';
import axios from "axios";
import SignInForm from "../../Components/Forms/SignInForm/index.js"
import {connect} from 'react-redux';
import {setToken} from "../../action_creators.js"

let mapStateToProps = state => ({token: state.token.token})
let mapDispatchToProps = {setToken}

class SignIn extends Component {
  submit = values => {
    axios({
  			url: "https://test-app-a-level.herokuapp.com/auth/login",
  			method: "POST",
  			headers: {
  				"Content-Type": "application/json"
  			},
  			data: values
  		})
  			.then(res => this.props.setToken(res.data.token))
  			.catch(err => console.error(err.response.data.message))
  }
  render(){
    return(
      <div>
        <h3>SignIn</h3>
        <SignInForm onSubmit={this.submit}/>
      </div>
    )
  }
}

SignIn = connect(mapStateToProps, mapDispatchToProps)(SignIn)

export default SignIn
