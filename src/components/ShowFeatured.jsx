import React, { Component } from 'react';
import FilmID from './FilmID';

class ShowFeatured extends Component {
    constructor(props) {
        super(props);

        this.state = {
            film: []
        }
    }

    componentDidMount() {
            fetch("https://ghibliapi.herokuapp.com/films/" + this.props.match.params.id)
            .then(res => res.json())
            .then(film => {
                this.setState({film});
            })
    }

    render() {
        return(
            <main>
                <div className="header-container">
                    <img src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="studio ghibli logo"/>
                </div>
                <div className="content">
                    <div className="row">
                                <div className="col-lg-4">
                                    <FilmID title={this.state.film.title} description={this.state.film.description} id={this.state.film.id} director={this.state.film.director} producer={this.state.film.producer} release_date={this.state.film.release_date} rating={this.state.film.rt_score} />
                                </div>
                    </div>
                </div>
            </main>
            )
    }
}

export default ShowFeatured;