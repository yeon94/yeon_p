import React from "react";
import {
	HashRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";
import Header from "./Header";
import Home from "../Routes/Home";
import Intro from "../Routes/Intro";
import Skills from "../Routes/Skills";
import Works from "../Routes/Works";

export default () => (
	<Router>
		<Header />
		<Switch>
			<Route path='/' exact component={Home} />
			<Route path='/intro' component={Intro} />
			<Route path='/skills' component={Skills} />
			<Route path='/work' component={Works} />
			<Redirect from='*' to='/' />
		</Switch>
	</Router>
);
