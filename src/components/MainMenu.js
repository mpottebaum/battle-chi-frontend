import React from 'react'
import { connect } from 'react-redux'
import { createGame } from '../actions/games'

class MainMenu extends React.Component {

    handleCreateClick = () => {
        this.props.createGame()
    }

    render() {
        return <div>
            <h1>Battle For Chicago</h1>
            <button onClick={this.handleCreateClick}>Create Game</button>
            <button>Join Game</button>
        </div>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createGame: () => dispatch(createGame())
    }
}

export default connect(null, mapDispatchToProps)(MainMenu)