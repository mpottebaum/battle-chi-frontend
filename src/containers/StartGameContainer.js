import React from 'react'
import { connect } from 'react-redux'
import { ActionCableConsumer } from 'react-actioncable-provider'
import MainMenu from '../components/MainMenu'
import LobbyContainer from './LobbyContainer'
import { addGame } from '../actions/games'

class StartGameContainer extends React.Component {
    
    handleGamesReceived = game => {
        this.props.addGame(game)
    }

    render() {
        return <div>
            <ActionCableConsumer
                channel={{channel: 'GamesChannel'}}
                onReceived={this.handleGamesReceived}
            >
                <h1>Battle For Chicago</h1>
                {this.props.game ? <LobbyContainer /> : <MainMenu />}
            </ActionCableConsumer>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        game: state.game
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addGame: game => dispatch(addGame(game))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartGameContainer)