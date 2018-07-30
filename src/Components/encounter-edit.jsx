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
                <h3>Edit Encounter</h3>
                <button onClick={this.showState}>Show state</button>
            </div>
        )
    }

}


export default EncounterDetails;