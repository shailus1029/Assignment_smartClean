import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./Redux/Store/store.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../src/Containers/Login/Login.jsx";
import Home from "../src/Containers/Home/Home.jsx";

class App extends Component {
	render() {
		return (
			<Provider store={configureStore()}>
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Login} />
						<Route path="/home" component={Home} />
						<Route path="*" component={Login} />
					</Switch>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
