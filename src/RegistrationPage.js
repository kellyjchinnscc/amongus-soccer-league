import React, { Component } from 'react'
import './tablestyles.css'
export class RegistrationPage extends Component {
    render() {
        return (
            <div className="container" id="registrationForm">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Team Name</label>
                            <input type="text" className="form-control" id="teamName" placeholder="Enter Team Name"/>
                        </div>
                        
                        <div className="form-group">
                            <label for="homeStadium">Home Stadium</label>
                            <input type="text" className="form-control" id="homeStadium" placeholder="Enter Home Stadium"/>
                        </div>

                        <div className="form-group">
                            <label for="exampleInputPassword1">Number of Players</label>
                            <input type="number" className="form-control" id="numberPlayers" min="11" max="25" placeholder="Choose between 11-25"/>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default RegistrationPage
