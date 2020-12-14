import React, { Component } from 'react'
import './tablestyles.css'
import image from './amongusgame1.png'
import motm from './motmcharacter.png'

// This Component is table-based. It dynamically outputs 12 Bootstrap Tables with data generated from dummy arrays
export class GameDetailsTable extends Component {
    state = 
    {
        leftTeams: ['Sea Hawks', 'Yee Haws', 'Gym Rats', 'Dream Boiz', 'Cream Cheeserz', 'Burger Makers'],
        rightTeams: ['Land Lubbers', 'Hockey Losers', 'Nova Scotians', 'Newfies', 'PE Islanders', 'Brunswickers'],
        stadiums: ['Pineapple Stadium', 'Ox Arena', 'Tiger Oval', 'Buffalo Hill', 'Penguin Rink', "Rhino Rink"],
        dates: ['Nov 20 2020', ' Nov 25 2020', 'Nov 30 2020', 'Dec 5 2020', 'Dec 10 2020', 'Dec 15 2020']
    }

    generateNumber = () => {
        return Math.round(Math.random() * 10)
    }

    render() {
        return (
            <React.Fragment>
                <h2 id="upcomingGamesHeader">Upcoming Games</h2>
                {this.state.leftTeams.map( (leftTeam, index) => {
                    return(
                            
                            <div className="gameSchedule container" key={index}>
                                <table className="table" key={index}>
                                    <thead>
                                        <tr className="bg-primary">
                                            <th>{leftTeam}</th>
                                            <th className="table-bordered">VS</th>
                                            <th>{this.state.rightTeams[index]}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> {this.generateNumber()} W - {this.generateNumber()} L - {this.generateNumber()} D</td>
                                            <td className="table-bordered"></td>
                                            <td> {this.generateNumber()} W - {this.generateNumber()} L - {this.generateNumber()} D</td>
                                        </tr>
                        
                                        <tr>
                                            <th scope="row" className="dateAndLocation">Date and Location</th>
                                            <td>{this.state.dates[index]}</td>
                                            <td>{this.state.stadiums[index]}</td>
                                        </tr>

                                     
                                    </tbody>
                                </table>
                                
                                
                                <table className="table">
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                        <td className="manOfMatch table-bordered" id="motmPhotoCell">
                                            <h1>Most Anticipated Player</h1>
                                            <img src={motm} alt="portrait" className="motmPhoto"></img>
                                        </td>
                                            <td className="manOfMatch">
                                                <h1>Player Bio</h1>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus quam nec gravida tempus. Nam rutrum massa quis ligula sodales molestie. Mauris quam eros, imperdiet sed velit et, dictum pulvinar massa.
                                                </p>
                                            </td>
                                            <td className="manOfMatch">
                                                <h1>Season Stats</h1>
                                                <div className="container manOfMatch">
                                                    <div className="row">
                                                        <td className="table-bordered col-sm">Goals</td>
                                                        <td className="table-bordered col-sm">Assists</td>
                                                        <td className="table-bordered col-sm">Tackles</td>
                                                    </div>
                                                    <div className="row">
                                                        <td className="table-bordered col-sm">{this.generateNumber()}</td>
                                                        <td className="table-bordered col-sm">{this.generateNumber()}</td>
                                                        <td className="table-bordered col-sm">{this.generateNumber()}</td>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                
                                {/* <br/> */}
                            </div>
                            
                        ) // end of inner return brackets
                        
                    }) // end of map brackets
                }
            </React.Fragment>
        )
    } // end of render method bracket
}

export default GameDetailsTable