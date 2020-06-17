import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="header-container">
                <img className="mx-auto d-block" src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="studio ghibli logo"/>
                {/* <Link to="/films">View Films</Link> */}
                {/* <button className="btn btn-block btn-lg btn-outline-primary">Show Films</button> */}
                <br/>
                {/* <Link to="/people">View People</Link> */}
                {/* <button className="btn btn-block btn-lg btn-outline-primary">Show People</button> */}
            </div>
        )
    }
}

export default Home;