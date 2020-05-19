import React from 'react'
import { connect } from 'react-redux'
import EndAttack from './EndAttack'
import { setPlaceMilitiaCount } from '../actions/militia'

class CurrentAction extends React.Component {

    componentDidMount() {
        if(this.props.currentPlayer) {
            const placeMilitiaCount = this.calcPlaceMilitiaCount()
            this.props.setPlaceMilitiaCount(placeMilitiaCount)
        }
    }

    calcPlaceMilitiaCount = () => {
        const numNeighborhoods = this.calcNumNeighborhoods()
        return Math.floor(numNeighborhoods / 3)
    }

    calcNumNeighborhoods = () => {
        const { game, currentPlayer } = this.props
        const player = game.players.find(player => player.id === currentPlayer.id)
        const playerMilitia = game.militia.filter(militium => militium.player_id === currentPlayer.id)
        const neighborhoods = []
        playerMilitia.forEach(militium => {
            if(neighborhoods.includes(militium.neighborhood_id)) {
                return
            } else {
                neighborhoods.push(militium.neighborhood_id)
            }
        })
        return neighborhoods.length
    }

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
    
    render() {
        const player = this.findPlayer()
        return <div>
            <h3>Turn</h3>
            <p>Number: {this.props.game.turn_num}</p>
            <p>Player: {player.name}</p>
            <p>Stage: {this.translateTurnStage()}</p>
            {
                this.props.game.turn_stage === 0 ?
                `Militias to place: ${this.props.placeMilitiaCount - this.props.militiaPlaced}`
                :
                null
            }
            {this.renderEndAttack()}
        </div>
    }
}

const mapStateToProps = state => {
    return {
        game: state.game,
        currentPlayer: state.currentPlayer,
        placeMilitiaCount: state.placeMilitiaCount,
        militiaPlaced: state.militiaPlaced
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPlaceMilitiaCount: count => dispatch(setPlaceMilitiaCount(count))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentAction)