import React from 'react'
import { connect } from 'react-redux'
import { createGame, joinGame } from '../actions/games'

class MainMenu extends React.Component {
    constructor() {
        super()
        this.state = {
            gameId: ''
        }
    }

    handleCreateClick = () => {
        this.props.createGame()
    }

    handleChange = e => {
        this.setState({
            gameId: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.joinGame(this.state.gameId)
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
        createGame: () => dispatch(createGame()),
        joinGame: id => dispatch(joinGame(id))
    }
}

export default connect(null, mapDispatchToProps)(MainMenu)