import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class EncounterDetails extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            visit_number: "",
            admitted_at: "",
            discharged_at: "",
            location: "",
            room: "",
            bed: "",
            failed: false
        }
        
    }

    componentDidMount() {
        console.log(this.props.location.state.encounter.admitted_at)
        let str = this.props.location.state.encounter.admitted_at.slice(0, -2)
        console.log(str)
        this.setState({
            visit_number: this.props.location.state.encounter.visit_number,
            admitted_at: str,
            discharged_at: this.props.location.state.encounter.discharged_at,
            location: this.props.location.state.encounter.location,
            room: this.props.location.state.encounter.room,
            bed: this.props.location.state.encounter.bed,
            failed: false
        })
    }

    visitChange = (event) => {
        this.setState({
            visit_number: event.target.value
        })
    }

    admittedChange = (event) => {
        this.setState({
            admitted_at: event.target.value
        })
    }

    dischargedChange = (event) => {
        this.setState({
            discharged_at: event.target.value
        })
    }

    locationChange = (event) => {
        this.setState({
            location: event.target.value
        })
    }

    roomChange = (event) => {
        this.setState({
            room: event.target.value
        })
    }

    bedChange = (event) => {
        this.setState({
            bed: event.target.value
        })
    }

    showState = () => {
        console.log(this.props.location.state)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.props.location.state)
        let form = {
            "patient_id": this.props.location.state.patient_id,
            "visit_number": this.state.visit_number,
            "admitted_at": this.state.admitted_at,
            "discharged_at": this.state.discharged_at,
            "location": this.state.location,
            "room": this.state.room,
            "bed": this.state.bed
        }
        console.log(this.props.location.state)
        console.log(`http://localhost:3000/encounters/${this.props.location.state.encounter.id}`)
        fetch(`http://localhost:3000/encounters/${this.props.location.state.encounter.id}`, {
          method: 'PUT',
          headers: {
              "Content-Type": "application/json; charset=utf-8"
          },
          body: JSON.stringify(form),
        }).then((data) => {
            if (data.status == 200) {
                this.props.history.push('/')
            }
        }).catch((data) => {
            this.setState({
                failed: true
            })
        })
      }

    render() {
        return(
            <div>
                <h2>Add a new encounter</h2>
                <button onClick={this.showState}>Show state</button>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Visit Number (Required):
                        <input type="number" name="visit_number" placeholder="Visit Number" value={this.state.visit_number} onChange={this.visitChange} required />
                    </label>
                    <label>
                        Admitted At (Required):
                        <input type="datetime-local" name="admitted_at" placeholder="Admitted At" value={this.state.admitted_at} onChange={this.admittedChange} required/>
                    </label>
                    <label>
                        Discharged At:
                        <input type="datetime-local" name="discharged_at" placeholder="Discharged Ar" value={this.state.discharged_at} onChange={this.dischargedChange}/>
                    </label>
                    <label>
                        Location:
                        <input type="text" name="location" placeholder="Location" value={this.state.location} onChange={this.locationChange}/>
                    </label>
                    <label>
                        Room:
                        <input type="text" name="room" placeholder="Room" value={this.state.room} onChange={this.roomChange}/>
                    </label>
                    <label>
                        Bed:
                        <input type="text" name="bed" placeholder="Bed" value={this.state.bed} onChange={this.bedChange} />
                    </label>
                    <button>Send data!</button>
                    <Link to={{pathname: `/`}}>Cancel and return home</Link>
                </form>
            </div>
        )
    }

}


export default EncounterDetails;