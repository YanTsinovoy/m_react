import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import {Provider}  from 'react-redux';
import Auth from "./Pages/Auth/index.js";
import store from './redux_store.js'
import Header from './Components/Header/index.js'
import ToDo from './Pages/ToDo/ToDo.js'
import PrivateRoute from "./privateRouter";
import App from "./App.js";



class Router extends Component {
	render() {
		return (
			<Provider store = {store}>
				<div className="container">
				<Header />
				<Switch>
					<Route path="/" component={App} exact/>
					<Route exact path="/auth" component={Auth} />
					<PrivateRoute exact path="/ToDO" component={ToDo} token={store.getState().token.token}/>
				</Switch>
				</div>
			</Provider>
		);
	}
}



export default withRouter(Router);
