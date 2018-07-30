import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import '../styles/app.scss'

class EncounterAdd extends React.Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);

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
        console.log(this.state)
        console.log(this.props.location.state)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let form = {
            "patient_id": this.props.location.state,
            "visit_number": this.state.visit_number,
            "admitted_at": this.state.admitted_at,
            "discharged_at": this.state.discharged_at,
            "location": this.state.location,
            "room": this.state.room,
            "bed": this.state.bed
        }
        console.log(form)
        fetch('http://localhost:3000/encounters', {
          method: 'POST',
          headers: {
              "Content-Type": "application/json; charset=utf-8"
          },
          body: JSON.stringify(form),
        }).then((data) => {
            console.log("success", data)
            if (data.status == 200) {
                this.props.history.push(`/patient/${this.props.location.state}`)
            }
        }).catch((data) => {
            console.log("fail", data)
            this.setState({
                failed: true
            })
        })
      }
    

    render() {
        return(
            <div className="patient-add">
                <p>Add New Patient</p>
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
                </form>
            </div>
        )
    }
}

export default EncounterAdd;