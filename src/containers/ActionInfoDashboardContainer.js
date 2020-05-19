import React from 'react'
import CurrentAction from '../components/CurrentAction'
import GameInfo from '../components/GameInfo'
import DashboardContainer from './DashboardContainer'

class ActionInfoDashboardContainer extends React.Component {
    render() {
        return <div>
            <CurrentAction />
            <GameInfo />
            <DashboardContainer />
        </div>
    }
}

export default ActionInfoDashboardContainer