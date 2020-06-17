import React, { Component } from 'react';
import Films from './Films';

class ShowFilms extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: []
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(films => {
            this.setState({films});
        });
    }

    render() {
        return(
            <main>
        <div className="header-container">
        <img className="mx-auto d-block" src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="studio ghibli logo"/>
        </div>
        <div className="content">
        <div className="row">
            {this.state.films.map((film, index) => {
                return (
                    <div key={index} className="col-lg-4">
                        <Films title={film.title} description={film.description} id={film.id} />
                    </div>
                )
            })}
        </div>
    </div>
    </main>
        )
    }
}

export default ShowFilms;