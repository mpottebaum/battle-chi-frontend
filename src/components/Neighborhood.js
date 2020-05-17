import React from 'react'
import { connect } from 'react-redux'
import { unselectNeighborhood } from '../actions/neighborhoods'
import PlaceMilitia from './PlaceMilitia'
import Attack from './Attack'
import Fortify from './Fortify'

class Neighborhood extends React.Component {
    
    findMilitia = () => {
        return this.props.game.militia.filter(militium => {
            return militium.neighborhood_id === this.props.neighborhood.id
        })
    }

    findPlayer = militium => {
        return this.props.game.players.find(player => {
            return player.id === militium.player_id
        })
    }

    handleCloseClick = () => {
        this.props.unselectNeighborhood(this.props.neighborhood.name)
    }

    renderOpponentAction = () => {
        if(this.props.game.turn_stage === 1) {
            return <Attack />
        } else {
            return null
        }
    }

    renderPlayerAction = () => {
        const militia = this.findMilitia()
        const player = this.findPlayer(militia[0])
        switch(this.props.game.turn_stage) {
            case 0:
                return <PlaceMilitia player={player} neighborhood={this.props.neighborhood}/>
            case 2:
                return <Fortify />
            default:
                return null
        }
    }

    isControlled = player => {
        return player.id === this.props.currentPlayer.id
    }

    isCurrentPlayersTurn = () => {
        return this.props.currentPlayer.order_num === this.props.game.order_num
    }

    render() {
        const militia = this.findMilitia()
        const player = this.findPlayer(militia[0])
        return <li>
            <p>{this.props.neighborhood.name}</p>
            <p>Controlled by: {player.name}</p>
            <p>Militias: {militia.length}</p>
            <p>Zone: {this.props.neighborhood.zone.name}</p>
            <button onClick={this.handleCloseClick}>Close</button>
            {
                this.isCurrentPlayersTurn() && this.isControlled(player) ?
                this.renderPlayerAction()
                :
                this.renderOpponentAction()
            }
        </li>
    }
}

const mapStateToProps = state => {
    return {
        game: state.game,
        currentPlayer: state.currentPlayer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        unselectNeighborhood: name => dispatch(unselectNeighborhood(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Neighborhood)