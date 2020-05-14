import React from 'react'
import { connect } from 'react-redux'
import { ActionCableConsumer } from 'react-actioncable-provider'
import { addPlayer } from '../actions/players'
import { playersUrl, HEADERS } from '../constants/index'

class GameContainer extends React.Component {

    handleReceived = resp => {
        console.log(resp)
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
                <button onClick={this.handleClick}>Push</button>
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
        addPlayer: player => dispatch(addPlayer(player))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)