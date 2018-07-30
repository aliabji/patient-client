import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Components/home'
import Patient from './Components/patient'
import PatientAdd from './Components/patient-add'
import EncounterDetails from './Components/encounter-details'
import EncounterEdit from './Components/encounter-edit'
import Delete from './Components/delete-confirmation';


const App = () => (
	<div className="App">
    	<header className="App-header">
			<div>
				<Router>
					<div>
						<Route exact path="/" component={Home} />
						<Route exact path="/patient/:number" component={Patient} />
						<Route exact path="/patient/add" component={PatientAdd} />
						<Route exact path="/patient/:number/delete" component={Delete} />
						<Route exact path="/encounter/:number" component={EncounterDetails} />
						<Route exact path="/encounter/edit/:number" component={EncounterEdit} />
						<Route exact path="/encounter/:number/delete" component={Delete} />
					</div>
				</Router>
			</div>
    	</header>
  	</div>
);

export default App;