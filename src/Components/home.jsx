import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            patients: []
        }
    }

    componentDidMount(props) {
        fetch("http://localhost:3000/patients").then((data) => {
            return data.json()
        }).then((data) => {
            this.setState({
                patients: data.data
            })
        })
    }

    showState = () => {
        console.log(this.state.patients)
    }

    render() {
        return(
            <div className="home">
                <header className="home-header">
                </header>
                <p>Home</p>
                <button onClick={this.showState}>Show state</button>
                <ul>
                    {this.state.patients.map(p => <li key={p.id}>{p.first}, {p.last}, {p.MRN} 
                    <Link to={{pathname: `/patient`, state: {id: p.id}}}>Patient Details</Link></li>)}
                </ul>
                
            </div>
        )
    }
}

export default Home;