import React from 'react'
import Map from '../components/Map'
import GameLog from '../components/GameLog'
import CurrentAction from '../components/CurrentAction'
import GameInfo from '../components/GameInfo'
import NeighborhoodInfo from '../components/NeighborhoodInfo'

class DashboardContainer extends React.Component {
    render() {
        return <div>
            <Map />
            <GameLog />
            <CurrentAction />
            <GameInfo />
            <NeighborhoodInfo />
        </div>
    }
}

export default DashboardContainer