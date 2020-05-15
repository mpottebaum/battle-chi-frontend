import React from 'react'
import { connect } from 'react-redux'
import { ActionCableConsumer } from 'react-actioncable-provider'
import Lobby from '../components/Lobby'
import { updateGame } from '../actions/games'

class LobbyContainer extends React.Component {

    handleReceived = resp => {
        this.props.updateGame(resp.game)
        if(this.props.game.players.length === this.props.game.num_players) {
            this.props.history.push(`/game/${this.props.game.id}`)
        }
    }

    render() {
        return <React.Fragment>
            <ActionCableConsumer
                channel={{channel: 'PlayersChannel', game: this.props.game.id}}
                onReceived={this.handleReceived}
            >
                <Lobby />
            </ActionCableConsumer>
        </React.Fragment>
    }
}

const mapStateToProps = state => {
    return {
        currentPlayer: state.currentPlayer,
        game: state.game,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateGame: game => dispatch(updateGame(game))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LobbyContainer)