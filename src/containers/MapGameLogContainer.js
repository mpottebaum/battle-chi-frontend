import React from 'react'
import Map from '../components/Map'
import GameLog from '../components/GameLog'

class MapGameLogContainer extends React.Component {
    render() {
        return <div>
            <Map />
            <GameLog />
        </div>
    }
}

export default MapGameLogContainer