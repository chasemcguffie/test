import React, { Component } from 'react';
import FilmList from '../components/FilmList';
import PeopleList from '../components/PeopleList';
import { Link } from 'react-router-dom'


class App extends Component {

    render() {
        return (
            <div>
            <div>
            <link to="/films"></link>
            <link to="/people"></link>
            </div>
            <button>Films</button>
            <FilmList />
            <PeopleList />
            </div>
        )
    }
}

export default App;