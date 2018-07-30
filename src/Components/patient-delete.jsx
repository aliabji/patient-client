import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class PatientDelete extends React.Component {
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
        console.log(this.props.location)
    }

    deleteEntry = () => {
        console.log(`http://localhost:3000/patients/${this.props.location.state.id}`)
        fetch(`http://localhost:3000/patients/${this.props.location.state.id}`, {
          method: 'DELETE',
          headers: {
              "Content-Type": "application/json; charset=utf-8"
          }
        }).then((data) => {
            console.log("success", data)
            if (data.status == 200) {
                this.props.history.push(`/`)
            }
        }).catch((data) => {
            console.log("fail", data)
            this.setState({
                failed: true
            })
        })
    }

    cancel = () => {
        this.props.history.push(`/patient/${this.props.location.state.id}`)
    }

    render() {
        return(
            <div className="home">
                <header className="home-header">
                </header>
                <h2>Are you sure you would like to delete this patient?</h2>
                <button onClick={this.showState}>Show state</button>
                <button onClick={this.deleteEntry}>Confirm - Delete Entry</button>
                <button onClick={this.cancel}>Cancel</button>
            </div>
        )
    }

}


export default PatientDelete;