import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';

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
            <div>
                <h2>Add a new encounter</h2>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-field">
                            <label>
                                Visit Number (Required):
                                <input type="number" name="visit_number" placeholder="Visit Number" value={this.state.visit_number} onChange={this.visitChange} required />
                            </label>
                        </div>
                        <div className="form-field">
                            <label>
                                Admitted At (Required):
                                <input type="datetime-local" name="admitted_at" placeholder="Admitted At" value={this.state.admitted_at} onChange={this.admittedChange} required/>
                            </label>
                        </div>
                        <div className="form-field">
                            <label>
                                Discharged At:
                                <input type="datetime-local" name="discharged_at" placeholder="Discharged Ar" value={this.state.discharged_at} onChange={this.dischargedChange}/>
                            </label>
                        </div>
                        <div className="form-field">
                            <label>
                                Location Attended:
                                <input type="text" name="location" placeholder="Location" value={this.state.location} onChange={this.locationChange}/>
                            </label>
                        </div>
                        <div className="form-field">
                            <label>
                                Room Occupied:
                                <input type="text" name="room" placeholder="Room" value={this.state.room} onChange={this.roomChange}/>
                            </label>
                        </div>
                        <div className="form-field">
                            <label>
                                Bed Occupied:
                                <input type="text" name="bed" placeholder="Bed" value={this.state.bed} onChange={this.bedChange} />
                            </label>
                        </div>
                        <button>Send data!</button>
                        <Link to={{pathname: `/patient/${this.props.location.state}`}}>Cancel and return to Patient overview</Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default EncounterAdd;