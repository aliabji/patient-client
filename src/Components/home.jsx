import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            patients: null
        }
    }

    componentDidMount(props) {
        fetch('http://localhost:3000/patients').then((response) => {
            console.log(response)
        })
    }

    render() {
        return(
            <div className="home">
                <header className="home-header">
                </header>
                <p>Home</p>
                <Link to={`/patient`}>Patient Details</Link>
            </div>
        )
    }
}

export default Home;