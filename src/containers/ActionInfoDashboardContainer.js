import React from 'react'
import CurrentAction from '../components/CurrentAction'
import GameLog from '../components/GameLog'
import DashboardContainer from './DashboardContainer'

class ActionInfoDashboardContainer extends React.Component {
    render() {
        return <div className='info-dashboard'>
            <CurrentAction />
            <GameLog />
            <DashboardContainer />
        </div>
    }
}

export default ActionInfoDashboardContainer