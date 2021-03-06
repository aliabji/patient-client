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

    goBack = () => {
        this.props.history.goBack();
    }

    render() {
        return(
            <div>
                <h2>Encounter Details</h2>
                <button onClick={this.goBack}>Go Back</button>
                <table>
                    <thead>
                        <tr>
                            <th>Visit Number</th>
                            <th>Admitted At</th>
                            <th>Discharged At</th>
                            <th>Location</th>
                            <th>Room</th>
                            <th>Bed</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>{this.props.location.state.encounter.visit_number}</td>
                            <td>{this.props.location.state.encounter.admitted_at}</td>
                            <td>{this.props.location.state.encounter.discharged_at ? this.props.location.state.encounter.discharged_at : "N/A"}</td>
                            <td>{this.props.location.state.encounter.location ? this.props.location.state.encounter.location : "No location specified"}</td>
                            <td>{this.props.location.state.encounter.room ? this.props.location.state.encounter.room : "No room specified"}</td>
                            <td>{this.props.location.state.encounter.bed ? this.props.location.state.encounter.bed : "No bed specified"}</td>
                            <td>
                                <Link to={{pathname: `/encounter/edit/${this.props.location.state.encounter.id}`, state: {encounter: this.props.location.state.encounter}}}><button>Edit</button></Link>
                                <Link to={{pathname: `/encounter/${this.props.location.state.encounter.id}/delete`, state: {encounter: this.props.location.state.encounter, type: "encounter"}}}><button>Destroy</button></Link>
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }

}


export default EncounterDetails;