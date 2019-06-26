import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CheckedSelect from './components/MultiSelect/CheckedSelect';
import LocalIp from './components/LocalIP_Url/LocalIp';
import GoogleTranslate from './components/GoogleTranslate/GoogleTranslate';
import IncrementDecrement from './Samples/ReducerTest/IncrementDecrement';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Testing in React</h1>
				</header>

				<div className="componentes">
					<CheckedSelect />
				</div>
				<div className="componentes">
					<LocalIp />
				</div>
				<div>
					<GoogleTranslate />
				</div>
				<div>
					<IncrementDecrement />
				</div>
			</div>
		);
	}
}

export default App;
