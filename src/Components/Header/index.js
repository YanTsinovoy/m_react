import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {clearToken} from "../../action_creators.js"


let mapStateToProps = state => ({token: state.token.token})
let mapDispathToProps = {clearToken}

let LogOut = p => (
	<li className="header__item" onClick={p.clearToken}>
		<Link className="header__link" to="">
			LogOut
		</Link>
	</li>
)
LogOut = connect(state => ({}), mapDispathToProps )(LogOut)


const Header = () => (
	<header className="header">
		<nav className="header__nav">
			<ul className="header__list">
				<li className="header__item">
					<Link className="header__link" to="">
						Main Page
					</Link>
				</li>
				<li className="header__item">
					<Link className="header__link" to="/auth">
						Auth
					</Link>
				</li>
				<li className="header__item">
					<Link className="header__link" to="/ToDo">
						TODO
					</Link>
				</li>
				<LogOut />
			</ul>
		</nav>
	</header>
);

export default Header;
