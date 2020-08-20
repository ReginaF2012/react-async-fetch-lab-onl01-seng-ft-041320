import React, {Component} from 'react';

export default class App extends Component{

    state = {
        numberOfPeopleInSpace: null,
        peopleInSpace: []
    }

    componentDidMount(){
        return fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(json => this.setState({peopleInSpace: json.people, numberOfPeopleInSpace: json.number}, console.log(json)))
    }

    render(){
    return (<div>
                <h1>People In Space!!!</h1>
                <h3>There are currently {this.state.numberOfPeopleInSpace} in space.</h3>
                <h3>They are:</h3>
                <ul>
                    {this.state.peopleInSpace.map(person => {
                        return <li key={person.name +''+ person.craft}>{person.name} aboard {person.craft}</li>
                    })}
                </ul>
            </div>)
    }

}