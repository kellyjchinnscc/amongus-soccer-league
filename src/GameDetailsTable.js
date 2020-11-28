import React, { Component } from 'react'
import './tablestyles.css'

// This Component is table-based. It dynamically outputs 12 Bootstrap Tables with data generated from dummy arrays
export class GameDetailsTable extends Component {
    state = 
    {
        leftTeams: ['Sea Hawks', 'Yee Haws', 'Gym Rats', 'Dream Boiz', 'Cream Cheeserz', 'Burger Makers', 'Poutine Boiz', 'Popcorn Papas', 'Peanutbutters', 'Chicken Tenders', 'Pasta Boiz', 'Pizza Players'],
        rightTeams: ['Land Lubbers', 'Hockey Losers', 'Nova Scotians', 'Newfies', 'PE Islanders', 'Brunswickers', 'Quebecois', 'Ontarians', 'Manitobans', 'Saskatoons', 'B-Columbians', 'Albertans'],
        stadiums: ['Pineapple Stadium', 'Ox Arena', 'Tiger Oval', 'Buffalo Hill', 'Penguin Rink', 'Ant Hill', 'Monkey Hill', 'Mantis Field', 'Fly Oval', 'Owl Oval', 'Bat Cave', 'Robin Rink'],
        dates: ['Nov 20 2020', ' Nov 25 2020', 'Nov 30 2020', 'Dec 5 2020', 'Dec 10 2020', 'Dec 15 2020', 'Dec 20 2020', 'Dec 25 2020', 'Dec 30 2020', 'Jan 5 2020', 'Jan 10 2020', 'Jan 15 2020']
    }

    generateNumber = () => {
        return Math.round(Math.random() * 10)
    }

    render() {
        return (
            <React.Fragment>
                <h2>Upcoming Games</h2>
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
                            </div>
                        ) // end of inner return brackets
                    }) // end of map brackets
                }
            </React.Fragment>
        )
    } // end of render method bracket
}

export default GameDetailsTable