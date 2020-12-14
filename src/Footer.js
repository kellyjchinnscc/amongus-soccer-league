import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Footer extends Component {
    render() {
        return (
            <React.Fragment>
            <div id="footerDiv">
                <h1 className="bg-primary">Wanna Join the League? | 
                    <Link to="/register">Register Here!</Link> | 
                    <Link to="/">Main Page</Link>
                </h1>
            </div>
            </React.Fragment>
        )
    }
}

export default Footer
