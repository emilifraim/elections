import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
// provides our application with store
import { Provider } from 'react-redux';
// initilaizing store
import store from './store';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Elections from './components/elections/Elections';
import NotFound from './components/not-found/NotFound';

import './App.css';

import { createBrowserHistory } from 'history';
const browserHistory = createBrowserHistory();

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={browserHistory}>
					<div className="App">
						<Navbar />
						<Switch>
							<Route exact path="/" component={Elections} />
							<Route exact path="/not-found" component={NotFound} />
							<Route component={NotFound} />
						</Switch>
						<Footer />
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
