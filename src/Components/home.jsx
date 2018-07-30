import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../styles/home.css'

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
                <Link to={{pathname: '/add/patient'}}>Click here to add a new patient</Link>
                <table className="home-table">
                    <thead>
                        <tr>
                            <th>MRN</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Actions</th>
                        </tr>
                        {this.state.patients.map(p => <tr key={p.id}>
                            <td>{p.MRN}</td>
                            <td>{p.first}</td>
                            <td>{p.last}</td>
                            <td><Link to={{pathname: `/patient/${p.id}`, state: {id: p.id}}}>Show</Link>
                                <Link to={{pathname: `/patient/${p.id}/edit`, state: p}}>Edit</Link>
                                <Link to={{pathname: `/patient/${p.id}/delete`, state: p}}>Destroy</Link>
                            </td>
                        </tr>)}
                    </thead>
                </table>
            </div>
        )
    }
}

export default Home;