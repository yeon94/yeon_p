import React from "react";
import Router from "./components/Router";
import GlobalStyles from "./components/GlobalStyles";
import Helmet from "react-helmet"

class App extends React.Component {
	render() {
		return (
			<>	
				<Helmet>
					<title> Welcome | Yeon_P </title>
				</Helmet>
				<GlobalStyles />
				<Router />
			</>
		);
	}
}

export default App;
