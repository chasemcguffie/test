import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';

class PeopleList extends Component {
    constructor(props) {
        super(props)
        this.state = { people: [] }
    }
    componentDidMount(){
        fetch('https://ghibliapi.herokuapp.com/people')
        .then (res => res.json())
        .then(obj => this.setState( {people: obj } ))
    }
    render() {
        const lol = this.state.people.map ( (item) => {
            return (
                <div>
                <h1> {item.name} </h1>
                <h2> {item.gender} </h2>
                <h2> {item.age} </h2>
                </div>
            )
        })
        return(
        <div>
            { lol }
        </div>
        )
    }
}   

export default PeopleList;