import React from 'react'
import { connect } from 'react-redux'
import EndAttack from './EndAttack'
import EndTurn from './EndTurn'
import TurnStageBar from './TurnStageBar'

class CurrentAction extends React.Component {


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

    renderInstruction = player => {
        if(player.id === this.props.currentPlayer.id) {
            switch(this.props.game.turn_stage) {
                case 0:
                    if(player.cards.length >= 5 && !this.props.matchNeighborhoodCards.length > 0) {
                        return <h3>You must trade in a set of cards</h3>
                    } else if(this.props.matchNeighborhoodCards.length > 0) {
                        return <h3>Place two militias in any of the displayed neighborhoods</h3>
                    } else {
                        if(player.place_militium.num_militia - player.place_militium.militia_placed === 1) {
                            return <h3>You have {player.place_militium.num_militia - player.place_militium.militia_placed} militia left to place</h3>
                        } else {
                            return <h3>You have {player.place_militium.num_militia - player.place_militium.militia_placed} militias left to place</h3>
                        }
                    }
                case 1:
                    return <h3>Select enemy neighborhoods to attack from your adjacent neighborhoods</h3>
                case 2:
                    return <h3>Select one of your neighborhoods to fortify with nearby militias</h3>
            }
        } else {
            return null
        }
    }
    
    render() {
        const player = this.findPlayer()
        return <div className='current-action'>
            <TurnStageBar turnPlayer={player}/>
            <div className='center'>
                <div className='instructions'>
                    {this.renderInstruction(player)}
                </div>
                {this.renderEndAttack()}
                {this.renderEndTurn()}
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        game: state.game,
        currentPlayer: state.currentPlayer,
        matchNeighborhoodCards: state.matchNeighborhoodCards
    }
}

export default connect(mapStateToProps)(CurrentAction)