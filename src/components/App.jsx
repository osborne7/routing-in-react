import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Fragment } from 'react';
import ShowFilms from './ShowFilms';
import ShowPeople from './ShowPeople';
import Home from './Home';

class App extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <Router>
                <Fragment>
                    <div className="header-container">
                    <button><Link to="/">Go Home</Link></button>
                    <button><Link to="/films">View Films</Link></button>
                    <button><Link to="/people">View People</Link></button>
                    </div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/films" component={ShowFilms} />
                        <Route exact path="/people" component={ShowPeople} />
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default App;