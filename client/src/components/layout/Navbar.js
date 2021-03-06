import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar  navbar-expand-md fixed-top  headerBG ">
				<div className="container">
					<Link className="navbar-brand" to="/">
						Upcoming Elections
					</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
						<span className="navbar-toggler-icon" />
					</button>
				</div>
			</nav>
		);
	}
}

export default Navbar;
