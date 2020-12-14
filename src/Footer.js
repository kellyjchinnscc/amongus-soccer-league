import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <React.Fragment>
            <div id="footerDiv">
                <h1 className="bg-primary">Wanna Join the League? | <a href="/register">Register Here!</a> | <a href="/">Main Page</a></h1>
            </div>
            </React.Fragment>
        )
    }
}

export default Footer
