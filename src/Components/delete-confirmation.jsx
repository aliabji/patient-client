import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Delete extends React.Component {
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
        console.log(this.props.location.state)
    }

    showType = () => {
        if (this.props.location.state.encounter) {
            return "encounter"
        } else {
            return "patient"
        }
    }

    deleteEntry = () => {
        
    }

    render() {
        return(
            <div className="home">
                <header className="home-header">
                </header>
                <h2>Are you sure you would like to delete this {this.showType()}?</h2>
                <button onClick={this.showState}>Show state</button>
                
            </div>
        )
    }

}


export default Delete;