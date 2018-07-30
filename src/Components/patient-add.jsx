import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class Patient extends React.Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            patient: {},
            encounters: []
        }
    }

    showState = () => {
        console.log(this.state)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);

        console.log(data)
        
    //     fetch('/api/form-submit-url', {
    //       method: 'POST',
    //       body: data,
    //     });
      }
    

    render() {
        return(
            <div className="patient-add">
                <p>Add New Patient</p>
                <button onClick={this.showState}>Show state</button>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="first">
                        First Name (Required):
                        <input type="text" name="first" id="first" placeholder="First Name"/>
                    </label>
                    <label htmlFor="middle">
                        Middle Name (Required):
                        <input type="text" name="middle" id="middle" placeholder="Middle Name"/>
                    </label>
                    <label>
                        Last Name (Required):
                        <input type="text" name="last" placeholder="Last Name"/>
                    </label>
                    <label>
                        Weight in KG:
                        <input type="number" name="weight" placeholder="Weight in KG"/>
                    </label>
                    <label>
                        Height in CM:
                        <input type="number" name="height" placeholder="Height in CM"/>
                    </label>
                    <label>
                        MRN (Required):
                        <input type="number" name="MRN" placeholder="MRN"/>
                    </label>
                    <button>Send data!</button>
                </form>
            </div>
        )
    }

}


export default Patient;