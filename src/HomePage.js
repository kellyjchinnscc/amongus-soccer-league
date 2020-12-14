import React, { Component } from 'react'
import { RecentGames } from './RecentGames'
import { GameDetailsTable } from './GameDetailsTable'
export class HomePage extends Component {
    render() {
        return (
            <div>
                <RecentGames/>
                <GameDetailsTable/>
            </div>
        )
    }
}

export default HomePage
