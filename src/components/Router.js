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
			<Route path='https://yeon94.github.io/yeon_p/' exact component={Home} />
			<Route path='https://yeon94.github.io/yeon_p/intro' component={Intro} />
			<Route path='https://yeon94.github.io/yeon_p/skills' component={Skills} />
			<Route path='https://yeon94.github.io/yeon_p/work' component={Works} />
			<Redirect from='*' to='/' />
		</Switch>
	</Router>
);
