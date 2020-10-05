import React from "react";
import Router from "./components/Router";
import GlobalStyles from "./components/GlobalStyles";

class App extends React.Component {
	render() {
		return (
			<>
				<GlobalStyles />
				<Router />
			</>
		);
	}
}

export default App;
