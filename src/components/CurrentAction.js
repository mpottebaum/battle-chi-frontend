import React from 'react'
import { connect } from 'react-redux'
import EndAttack from './EndAttack'
import EndTurn from './EndTurn'

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
        return this.props.game.turn_stage === 2 ?
            <EndTurn gameId={this.props.game.id}/>
            :
            null
    }
    
    render() {
        const player = this.findPlayer()
        return <div>
            <h3>Turn</h3>
            <p>Number: {this.props.game.turn_num}</p>
            <p>Player: {player.name}</p>
            <p>Stage: {this.translateTurnStage()}</p>
            {
                this.props.game.turn_stage === 0 ?
                `Militias to place: ${player.place_militium.num_militia - player.place_militium.militia_placed}`
                :
                null
            }
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