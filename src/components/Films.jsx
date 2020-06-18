import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class Films extends Component {
    constructor(props) {
        super(props);
        
        this.state = {

        };
    }

    render() {
        return (
                <div>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                    <button className="details-button"><Link to={`/films/${this.props.id}`}>View Details</Link></button>
                </div>
        )
    }
}

export default Films;