import React from 'react'
import { connect } from 'react-redux'

class EndGame extends React.Component {

    findWinnerId = () => {
        return this.props.game.militia[0].player_id
    }

    renderWinnername = () => {
        const winnerId = this.findWinnerId()
        const winner = this.props.game.players.find(player => player.id === winnerId)
        return winnerId === this.props.currentPlayer.id ? 'You have' : `${winner.name} has`
    }

    render() {
        return <div className='center'>
            <h2>{this.renderWinnername()} conquered Chicago!</h2>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        game: state.game,
        currentPlayer: state.currentPlayer
    }
}

export default connect(mapStateToProps)(EndGame)