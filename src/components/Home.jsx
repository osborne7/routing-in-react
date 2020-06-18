import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="header-container">
                <img src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="studio ghibli logo"/>
            </div>
        )
    }
}

export default Home;