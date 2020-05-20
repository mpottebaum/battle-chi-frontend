import React from 'react'
import { connect } from 'react-redux'
import { ActionCableConsumer } from 'react-actioncable-provider'
import Lobby from '../components/Lobby'
import { updateGame, addGame } from '../actions/games'

class LobbyContainer extends React.Component {

    componentDidMount() {
        if(!this.props.game) {
            const gameId = localStorage.getItem('gameId')
            const playerId = localStorage.getItem('playerId')
            this.props.addGame(gameId, playerId)
        }
    }

    componentDidUpdate() {
        if(this.props.game.players.length === this.props.game.num_players) {
            this.props.history.push(`/game/${this.props.game.id}`)
        }
    }
    

    handleReceived = resp => {
        this.props.updateGame(resp.game)
        if(this.props.game.players.length === this.props.game.num_players) {
            this.props.history.push(`/game/${this.props.game.id}`)
        }
    }

    render() {
        return <React.Fragment>
            {
                this.props.gameLoader ?
                'Loading'
                :
                <ActionCableConsumer
                    channel={{channel: 'PlayersChannel', game: this.props.game.id}}
                    onReceived={this.handleReceived}
                >
                    <Lobby />
                </ActionCableConsumer>
            }
        </React.Fragment>
    }
}

const mapStateToProps = state => {
    return {
        currentPlayer: state.currentPlayer,
        game: state.game,
        gameLoader: state.gameLoader
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateGame: game => dispatch(updateGame(game)),
        addGame: (gameId, playerId) => dispatch(addGame(gameId, playerId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LobbyContainer)