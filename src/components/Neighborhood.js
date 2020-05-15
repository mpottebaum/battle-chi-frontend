import React from 'react'
import { connect } from 'react-redux'
import { unselectNeighborhood } from '../actions/neighborhoods'
import PlaceMilitia from './PlaceMilitia'
import Attack from './Attack'
import Fortify from './Fortify'

class Neighborhood extends React.Component {
    constructor(props) {
        super(props)
        const militia = this.findMilitia(props)
        const player = this.findPlayer(props, militia[0])
        this.state = {
            militia: militia,
            player: player
        }
    }
    
    findMilitia = props => {
        return props.game.militia.filter(militium => {
            return militium.neighborhood_id === props.neighborhood.id
        })
    }

    findPlayer = (props, militium) => {
        return props.game.players.find(player => {
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
        switch(this.props.game.turn_stage) {
            case 0:
                return <PlaceMilitia player={this.state.player} neighborhood={this.props.neighborhood}/>
            case 2:
                return <Fortify />
            default:
                return null
        }
    }

    isControlled = () => {
        return this.state.player.id === this.props.currentPlayer.id
    }

    render() {
        
        return <li>
            <p>{this.props.neighborhood.name}</p>
            <p>Controlled by: {this.state.player.name}</p>
            <p>Militias: {this.state.militia.length}</p>
            <p>Zone: {this.props.neighborhood.zone.name}</p>
            <button onClick={this.handleCloseClick}>Close</button>
            {this.isControlled() ? this.renderPlayerAction() : this.renderOpponentAction()}
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