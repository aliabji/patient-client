import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';

class AddPatient extends React.Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            first: "",
            middle: "",
            last: "",
            weight: "",
            height: "",
            MRN: "",
            failed: false
        }
    }

    firstChange = (event) => {
        this.setState({
            first: event.target.value
        })
    }

    middleChange = (event) => {
        this.setState({
            middle: event.target.value
        })
    }

    lastChange = (event) => {
        this.setState({
            last: event.target.value
        })
    }

    heightChange = (event) => {
        this.setState({
            height: event.target.value
        })
    }

    weightChange = (event) => {
        this.setState({
            weight: event.target.value
        })
    }

    mrnChange = (event) => {
        this.setState({
            MRN: event.target.value
        })
    }

    showState = () => {
        console.log(this.state)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let form = {
            "first": this.state.first,
            "middle": this.state.middle,
            "last": this.state.last,
            "weight": this.state.weight,
            "height": this.state.height,
            "MRN": this.state.MRN
        }
        fetch('http://localhost:3000/patients', {
          method: 'POST',
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
            <div className="patient-add">
                <p>Add New Patient</p>
                <button onClick={this.showState}>Show state</button>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        First Name (Required):
                        <input type="text" name="first" placeholder="First Name" value={this.state.first} onChange={this.firstChange}required />
                    </label>
                    <label>
                        Middle Name (Required):
                        <input type="text" name="middle" placeholder="Middle Name" value={this.state.middle} onChange={this.middleChange} required/>
                    </label>
                    <label>
                        Last Name (Required):
                        <input type="text" name="last" placeholder="Last Name" value={this.state.last} onChange={this.lastChange} required />
                    </label>
                    <label>
                        Weight in KG:
                        <input type="number" name="weight" placeholder="Weight in KG" value={this.state.weight} onChange={this.weightChange}/>
                    </label>
                    <label>
                        Height in CM:
                        <input type="number" name="height" placeholder="Height in CM" value={this.state.height} onChange={this.heightChange}/>
                    </label>
                    <label>
                        MRN (Required):
                        <input type="number" name="MRN" placeholder="MRN" value={this.state.MRN} onChange={this.mrnChange} required />
                    </label>
                    <button>Send data!</button>
                    <Link to={'/'} >Cancel and return home</Link>
                </form>
            </div>
        )
    }

}


export default AddPatient;