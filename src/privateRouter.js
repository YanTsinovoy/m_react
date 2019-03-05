import React from "react";
import { Route, Redirect } from "react-router-dom";


const PrivateRoute = ({ component: Component, token, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props => {
				console.log("token", token);
				if (token === null) {
					return <Redirect to="auth" />;
				}

				return <Component {...props} />;
			}}
		/>
	)
}


export default PrivateRoute
