import React, { Component } from 'react'
import logo from './amonguslogocolored3.png'
import './tablestyles.css'

export class Header extends Component {
    render() {
        return (
            <div className="container header" id="headerDiv">
                <div className="row">
                    <img src={logo} alt="logo" className="col-6"/>
                    <h1 className="col-6">Among Us Soccer League</h1>
                </div>
            </div>
        )
    }
}

export default Header
