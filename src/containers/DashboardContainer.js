import React from 'react'
import { connect } from 'react-redux'
import NeighborhoodInfo from '../components/NeighborhoodInfo'
import Defend from '../components/Defend'

class DashboardContainer extends React.Component {
    renderDefense = () => {
        const battle = this.props.game.battles.find(battle => battle.defense_militia === null)
        return battle.defense_player_id === this.props.currentPlayer.id ? <Defend battle={battle}/> : 'Waiting for opponent to mount defense'
    }
    
    render() {
        return <React.Fragment>
            {
                this.props.battling ?
                (this.props.battleLoader ? 'Loading' : this.renderDefense())
                :
                <NeighborhoodInfo />
            }
        </React.Fragment>
    }
}

const mapStateToProps = state => {
    return {
        game: state.game,
        currentPlayer: state.currentPlayer,
        battling: state.battling,
        battleLoader: state.battleLoader
    }
}

export default connect(mapStateToProps)(DashboardContainer)