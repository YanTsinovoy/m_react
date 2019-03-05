import React, { Component } from 'react';
import SignIn from "../../Components/SignIn/index.js"
import SignUp from "../../Components/SignUp/index.js"
import {Redirect } from "react-router-dom";
import {connect} from 'react-redux';

let mapStateToProps = state => ({token: state.token.token})

class Auth extends Component {
	state = { switchForm: false };

	switchForm = () => this.setState(prevState => ({ switchForm: !prevState.switchForm }));

	render() {
		const { switchForm } = this.state;
		if(this.props.token) return (
			<Redirect to="ToDo" />
		)
		return (
			<div className="auth-box">
				<div className="auth-box__wrapper">
					{switchForm ? <SignUp /> : <SignIn />}
					<button onClick={this.switchForm}>Don't have account?</button>
				</div>
			</div>
		);
	}
}

Auth = connect(mapStateToProps, {})(Auth)

export default Auth
