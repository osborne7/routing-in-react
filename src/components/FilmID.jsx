import React, { Component } from 'react';

class FilmID extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <h4>Director: {this.props.director}</h4>
                <h4>Producer: {this.props.producer}</h4>
                <h4>Release Date: {this.props.release_date}</h4>
                <h4>Rating: {this.props.rating}</h4>
            </div>
        )
    }
}

export default FilmID;