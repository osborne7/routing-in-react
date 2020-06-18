import React, { Component } from 'react';
import People from './People';

class ShowPeople extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: []
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/people')
        .then(res => res.json())
        .then(people => {
            this.setState({people});
        });
    }

    render() {
        return (
            <main>
                <div className="header-container">
                    <img src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="studio ghibli logo"/>
                </div>
                <div className="content">
                    <div>
                        {this.state.people.map((person, index) => {
                            return (
                                <div key={index} className="col-lg-4">
                                    <People name={person.name} age={person.age} gender={person.gender} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </main>
            )
    }
}

export default ShowPeople;