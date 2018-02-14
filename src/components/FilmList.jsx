import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';

class FilmList extends Component {
    constructor(props) {
        super(props)
        this.state = { films: [] }
    }
    componentDidMount(){
        fetch('https://ghibliapi.herokuapp.com/films')
        .then (res => res.json())
        .then(obj => this.setState( {films: obj } ))
    }
    render() {
        const lol = this.state.films.map ( (item) => {
            return (
                <div>
                <h1> {item.title} </h1>
                <h2> {item.description} </h2>
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

export default FilmList;