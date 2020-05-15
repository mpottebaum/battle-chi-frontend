import React from 'react'
import { connect } from 'react-redux'
import { unselectNeighborhood } from '../actions/neighborhoods'

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

    render() {
        const militia = this.findMilitia()
        const player = this.findPlayer(militia[0])
        return <li>
            <p>{this.props.neighborhood.name}</p>
            <p>Controlled by: {player.name}</p>
            <p>Militias: {militia.length}</p>
            <p>Zone: {this.props.neighborhood.zone.name}</p>
            <button onClick={this.handleCloseClick}>Close</button>
        </li>
    }
}

const mapStateToProps = state => {
    return {
        game: state.game
    }
}

const mapDispatchToProps = dispatch => {
    return {
        unselectNeighborhood: name => dispatch(unselectNeighborhood(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Neighborhood)