import React from 'react'
import CurrentAction from '../components/CurrentAction'
import PlayerTable from '../components/PlayerTable'
import DashboardContainer from './DashboardContainer'

class ActionInfoDashboardContainer extends React.Component {
    render() {
        return <div className='info-dashboard'>
            <PlayerTable />
            <CurrentAction />
            <DashboardContainer />
        </div>
    }
}

export default ActionInfoDashboardContainer