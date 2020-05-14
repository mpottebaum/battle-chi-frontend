import React from 'react'
import { connect } from 'react-redux'
import { startCreateGame, startJoinGame } from '../actions/games'

class MainMenu extends React.Component {
    constructor() {
        super()
        this.state = {
            gameId: ''
        }
    }

    handleCreateClick = () => {
        this.props.startCreateGame()
    }

    handleChange = e => {
        this.setState({
            gameId: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.startJoinGame(this.state.gameId)
    }

    render() {
        return <div>
            <button onClick={this.handleCreateClick}>Create Game</button>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type='text' name='gameId' value={this.state.gameId} />
                <input type='submit' value='Join Game' />
            </form>
        </div>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startCreateGame: () => dispatch(startCreateGame()),
        startJoinGame: id => dispatch(startJoinGame(id))
    }
}

export default connect(null, mapDispatchToProps)(MainMenu)