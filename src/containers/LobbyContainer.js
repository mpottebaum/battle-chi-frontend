import React from 'react'
import { connect } from 'react-redux'
import { ActionCableConsumer } from 'react-actioncable-provider'
import NewPlayerForm from '../components/NewPlayerForm'
import { addPlayer } from '../actions/players'

class LobbyContainer extends React.Component {

    handleReceived = player => {
        this.props.addPlayer(player)
    }

    render() {
        return <div>
            <ActionCableConsumer
                channel={{ channel: 'PlayersChannel', game: this.props.game.id }}
                onReceived={this.handleReceived}
            >
                {this.props.gameLoader ? 'Loading game ID' : `ID: ${this.props.game.id}`}
                {this.props.currentPlayer ? 'Waiting for other players' : <NewPlayerForm />}
            </ActionCableConsumer>
        </div>
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
        addPlayer: player => dispatch(addPlayer(player))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LobbyContainer)