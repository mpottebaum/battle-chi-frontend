import React from 'react'
import { connect } from 'react-redux'
import EndAttack from './EndAttack'
import EndTurn from './EndTurn'
import TurnStageBar from './TurnStageBar'
import PlayerTable from './PlayerTable'

class CurrentAction extends React.Component {

    translateTurnStage = () => {
        switch(this.props.game.turn_stage) {
            case 0:
                return 'Place Militias'
            case 1:
                return 'Attack'
            case 2:
                return 'Fortify'
        }
    }

    findPlayer = () => {
        return this.props.game.players.find(player => {
            return player.turn_order_num === this.props.game.turn_order_num
        })
    }

    renderEndAttack = () => {
        return this.props.game.turn_stage === 1 && this.props.game.turn_order_num === this.props.currentPlayer.turn_order_num ?
            <EndAttack gameId={this.props.game.id}/>
            :
            null
    }

    renderEndTurn = () => {
        return this.props.game.turn_stage === 2 && this.props.game.turn_order_num === this.props.currentPlayer.turn_order_num ?
            <EndTurn gameId={this.props.game.id}/>
            :
            null
    }

    renderPlaceMilitias = player => {
        return this.props.game.turn_stage === 0 ?
            `Militias to place: ${player.place_militium.num_militia - player.place_militium.militia_placed}`
            :
            null
    }

    renderForceTrade = player => {
        return player.cards.length >= 5 && player.id === this.props.currentPlayer.id ?
            'You must trade in a set of cards'
            :
            null
    }
    
    render() {
        const player = this.findPlayer()
        return <div className='current-action'>
            <TurnStageBar />
            <PlayerTable turnPlayer={player} game={this.props.game}/>
            {this.renderForceTrade(player)}
            {this.renderPlaceMilitias(player)}
            {this.renderEndAttack()}
            {this.renderEndTurn()}
        </div>
    }
}

const mapStateToProps = state => {
    return {
        game: state.game,
        currentPlayer: state.currentPlayer
    }
}

export default connect(mapStateToProps)(CurrentAction)