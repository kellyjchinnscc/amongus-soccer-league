import React, { Component } from 'react'
import './tablestyles.css'

export class RegistrationPage extends Component {
    render() {
        return (
            <div className="container" id="registrationForm">
                    <form>
                        <div className="form-group">
                            <label for="teamName">Team Name</label>
                            <input type="text" className="form-control" id="teamName" name="teamName" placeholder="Enter Team Name" required/>
                        </div>

                        <div className="form-group">
                            <label for="coachName">Head Coach's Name</label>
                            <input type="text" className="form-control" id="teamName" name="teamName" placeholder="Enter Head Coach's Name" required/>
                        </div>
                        
                        <div className="form-group">
                            <label for="homeStadium">Home Stadium</label>
                            <input type="text" className="form-control" id="homeStadium" placeholder="Enter Home Stadium" required/>
                        </div>

                        <div className="form-group">
                            <label for="numberPlayers">Number of Players</label>
                            <input type="number" className="form-control" id="numberPlayers" min="11" max="25" placeholder="Choose between 11-25" required/>
                        </div>

                        <div className="form-group">
                            <p>Age Category: Junior or Open?</p>
                            
                                <div>
                                    <input className="form-check-input" type="radio" name="division" id="junior" value="junior" checked/>
                                    <label className="form-check-label" for="junior">Junior</label>
                                </div>

                                <div>
                                    <input className="form-check-input" type="radio" name="division" id="junior" value="junior"/>
                                    <label className="form-check-label" for="junior">Open</label>
                                </div>
                           
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
            </div>
        )
    }
}

export default RegistrationPage
