import React from 'react'
import { connect } from 'react-redux'
import { ActionCableConsumer } from 'react-actioncable-provider'
import { updateGame } from '../actions/games'
import { playersUrl, HEADERS } from '../constants/index'

class GameContainer extends React.Component {

    handleReceived = resp => {
        this.props.updateGame(resp.game)
    }

    handleClick = e => {
        const url = playersUrl + `/${this.props.currentPlayer.id}`
        const configObj = {
            method: 'PATCH',
            headers: HEADERS
        }
        fetch(url, configObj)
    }

    render() {
        return <div>
            <ActionCableConsumer
                channel={{channel: 'PlayersChannel', game: this.props.game.id}}
                onReceived={this.handleReceived}
            >
                {this.props.game.players.length === this.props.game.num_players ?
                <button onClick={this.handleClick}>Push</button>
                :
                'Waiting for other players'
                }
            </ActionCableConsumer>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)