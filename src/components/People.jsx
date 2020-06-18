import React, { Component } from 'react';

class People extends Component {
    constructor(props) {
        super(props);
        
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <p>{this.props.age}</p>
                <p>{this.props.gender}</p>
            </div>
        )
    }
}

export default People;