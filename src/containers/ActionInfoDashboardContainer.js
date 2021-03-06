import React from 'react'
import CurrentAction from '../components/currentAction/CurrentAction'
import PlayerTable from '../components/playersTable/PlayerTable'
import DashboardContainer from './DashboardContainer'

class ActionInfoDashboardContainer extends React.Component {
    render() {
        return <div className='info-dashboard'>
            <PlayerTable history={this.props.history}/>
            <CurrentAction />
            <DashboardContainer />
        </div>
    }
}

export default ActionInfoDashboardContainer