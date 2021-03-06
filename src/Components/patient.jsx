import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Patient extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            patient: {},
            encounters: []
        }
        
    }

    componentDidMount(props) {
        console.log(this.props.location.state)
        console.log(`http://localhost:3000/patients/${this.props.match.params.number}`)
        fetch(`http://localhost:3000/patients/${this.props.match.params.number}`).then((data) => {
            return data.json()
        }).then((data) => {
            console.log(data)
            this.setState({
                patient: data.patient,
                encounters: data.encounter
            })
        })
    }

    render() {
        return(
            <div>
                <h3>Patient Details</h3>
                <Link to={'/'}><button>Home</button></Link>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Last Name</th>
                            <th>Weight in KG</th>
                            <th>Height in CM</th>
                            <th>MRN</th>
                        </tr>
                        <tr>
                            <td>{this.state.patient.first}</td>
                            <td>{this.state.patient.middle}</td>
                            <td>{this.state.patient.last}</td>
                            <td>{this.state.patient.weight}</td>
                            <td>{this.state.patient.height}</td>
                            <td>{this.state.patient.MRN}</td>
                        </tr>
                    </thead>
                </table>
                <h3>Patient's Encounters</h3>
                <Link to={{pathname: '/add/encounter', state: this.state.patient.id}}><button>Add Encounter</button></Link>
                <table>
                    <thead>
                        <tr>
                            <th>Visit Number</th>
                            <th>Admitted At</th>
                            <th>Discharged At</th>
                            <th>Actions</th>
                        </tr>
                        {this.state.encounters.map(p => <tr key={p.id}>
                            <td>{p.visit_number}</td>
                            <td>{p.admitted_at}</td>
                            <td>{p.discharged_at ? p.discharged_at : "No discharge time specified"}</td>
                            <td>
                                <Link to={{pathname: `/encounter/${p.id}`, state: {encounter: p}}}><button>Show</button></Link>
                                <Link to={{pathname: `/encounter/edit/${p.id}`, state: {encounter: p}}}><button>Edit</button></Link>
                                <Link to={{pathname: `/encounter/${p.id}/delete`, state: {encounter: p, type: "encounter"}}}><button>Destroy</button></Link>
                            </td>
                        </tr>)}
                    </thead>
                </table>
            </div>
        )
    }

}


export default Patient;