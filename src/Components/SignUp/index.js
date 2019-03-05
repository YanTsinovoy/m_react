import React, { Component } from 'react';
import axios from "axios";
import SignUpForm from "../../Components/Forms/SignUpForm/index.js"

let Message = p => (
  <div className={p.flag === "good" ? "good_mess" :
  p.flag === "bad"? "bad_mess" : "def_mess"}>{p.mess}</div>
)

class SignUp extends Component {
  state = {mess: "", succ: ""}
  submit = values => {
    axios({
  			url: "https://test-app-a-level.herokuapp.com/auth/register",
  			method: "POST",
  			headers: {
  				"Content-Type": "application/json"
  			},
  			data: values
  		})
  			.then(res => this.setState({mess: res.data.message, succ: "good"}))
  			.catch(err => this.setState({mess: err.response.data.message, succ: "bad"}))
  }
  render(){
    return(
      <div>
        <h3>SignUp</h3>
        <SignUpForm onSubmit={this.submit}/>
        <Message flag={this.state.succ} mess={this.state.mess} />
      </div>
    )
  }
}

export default SignUp
