import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

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
                <p>Add New Patient</p>
                <button onClick={this.showState}>Show state</button>
                <form>
                    <input type="text" name="first" placeholder="First Name"/>
                </form>
            </div>
        )
    }

}


export default Patient;