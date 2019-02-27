import React, { Component } from 'react';

import HomePage from './Components/HomePage'
import Nav from './Components/Nav'
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Nav />
				<HomePage />
			</div>
		);
	}
}

export default App;
