import React, { Component } from 'react'
import './tablestyles.css'
import image from './amongusgame1.png'
import image2 from './amongusgame2.png'
import image3 from './amongusgame3.png'
import image4 from './amongusgame4.png'

// This Component is table-based. It dynamically outputs 12 Bootstrap Tables with data generated from dummy arrays
export class RecentGames extends Component {
    state = 
    {
        leftTeams: ['Sea Hawks', 'Yee Haws', 'Gym Rats', 'Dream Boiz'],
        rightTeams: ['Nova Scotians', 'Hockey Losers', 'Land Lubbers', 'Newfies'],
        stadiums: ['Pineapple Stadium', 'Ox Arena', 'Tiger Oval', 'Buffalo Hill'],
        dates: ['Oct 30 2020', ' Nov 11 2020', 'Nov 13 2020', 'Nov 15 2020'],
        images: [image, image2, image3, image4]
    }

    generateNumber = () => {
        return Math.round(Math.random() * 6)
    }

    render() {
        return (
            <React.Fragment>
                <h2>Recent Games Results</h2>
                <div className="container recentGames">
                    <div className="row">
                        {this.state.leftTeams.map( (leftTeam, index ) => {
                            return(
                                    <div className="col-3 "> 
                                        <table className="recentGame table">
                                            <thead>
                                                <tr className="bg-primary">
                                                    <th>{leftTeam}</th>
                                                    <th>VS</th>
                                                    <th>{this.state.rightTeams[index]}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td> {this.generateNumber()}</td>
                                                    <td>-</td>
                                                    <td> {this.generateNumber()}</td>
                                                </tr>
                                
                                                <tr>
                                                    <td>{this.state.stadiums[index]}</td>
                                                    <td>{}</td>
                                                    <td>{this.state.dates[index]}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="recentGamePic">
                                            <img src={this.state.images[index]} alt="game" ></img>
                                        </div>
                                    </div> 
                                )
                            })
                        }
                    </div> {/* end of row */}
                </div> {/* end of main container */}
                <br/>
            </React.Fragment>
        )
    } // end of render method bracket
}
export default RecentGames