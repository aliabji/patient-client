import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class EncounterDetails extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            patient: {},
            encounters: []
        }
        
    }

    componentDidMount(props) {
        console.log(this.props.location.state)
    }

    showState = () => {
        console.log(this.props.location.state)
    }

    render() {
        return(
            <div className="home">
                <header className="home-header">
                </header>
                <p>Patient</p>
                <button onClick={this.showState}>Show state</button>
                <Link to={{pathname: `/encounter/edit/${this.props.location.state.encounter.id}`, state: {encounter: this.props.location.state.encounter}}}>Encounter Edit</Link>
                <Link to={{pathname: `/encounter/${this.props.location.state.encounter.id}/delete`, state: {encounter: this.props.location.state.encounter}}}>Encounter Delete</Link>
            </div>
        )
    }

}


export default EncounterDetails;