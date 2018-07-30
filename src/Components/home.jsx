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
                <Link to={'/patient/add'}>Click here to add a new patient</Link>
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>MRN</th>
                        <th>Patient Details</th>
                    </tr>
                    {this.state.patients.map(p => <tr key={p.id}>
                        <td>{p.first}</td>
                        <td>{p.last}</td>
                        <td>{p.MRN}</td>
                        <td><Link to={{pathname: `/patient/${p.id}`, state: {id: p.id}}}>Patient Details</Link></td>
                    </tr>
                    )}
                </table>
            </div>
        )
    }
}

export default Home;