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
        console.log(`http://localhost:3000/patients/${this.props.location.state.id}`)
        fetch(`http://localhost:3000/patients/${this.props.location.state.id}`).then((data) => {
            return data.json()
        }).then((data) => {
            console.log(data)
            this.setState({
                patient: data.patient,
                encounters: data.encounter
            })
        })
    }

    showState = () => {
        console.log(this.state.patient, this.state.encounters)
    }

    render() {
        return(
            <div className="home">
                <header className="home-header">
                </header>
                <p>Patient</p>
                <button onClick={this.showState}>Show state</button>
                <table>
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
                            <Link to={{pathname: `/encounter/${p.id}`, state: {encounter: p}}}>Encounter Details</Link>
                        </td>
                    </tr>)}
                </table>
            </div>
        )
    }

}


export default Patient;