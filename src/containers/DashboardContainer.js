import React from 'react'
import { connect } from 'react-redux'
import NeighborhoodInfo from '../components/NeighborhoodInfo'
import Defend from '../components/Defend'
import Battle from '../components/Battle'

class DashboardContainer extends React.Component {
    renderDefense = battle => {
        return battle.defense_player_id === this.props.currentPlayer.id ? <Defend battle={battle}/> : 'Waiting for opponent to mount defense'
    }
    
    render() {
        const battle = this.props.game.battles.find(battle => battle.id === this.props.currentBattleId)
        return <React.Fragment>
            {
                this.props.currentBattleId ?
                (
                    this.props.defending ?
                    (this.props.battleLoader ? 'Loading' : this.renderDefense(battle))
                    :
                    <Battle battle={battle}/>
                )
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
        defending: state.defending,
        battleLoader: state.battleLoader,
        currentBattleId: state.currentBattleId
    }
}

export default connect(mapStateToProps)(DashboardContainer)