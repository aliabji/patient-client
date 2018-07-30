import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Components/home'
import Patient from './Components/patient'


const App = () => (
	<div className="App">
    	<header className="App-header">
			<div>
				<Router>
					<div>
						<Route exact path="/" component={Home} />
						<Route exact path="/patient" component={Patient} />
					</div>
				</Router>
			</div>
    	</header>
  	</div>
);

export default App;