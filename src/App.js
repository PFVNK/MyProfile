import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './Components/HomePage'
import Nav from './Components/Nav'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Route path='/' component={Nav} />
					<Route path='/' exact component={HomePage} />
					<Route path='/about' exact component={About} />
					<Route path='/projects' exact component={Projects} />
					<Route path='/contact' exact component={Contact} />
				</div>
			</Router>
		);
	}
}

export default App;
