import React from 'react'
// import { ActionCableConsumer } from 'react-actioncable-provider'
import { connect } from 'react-redux'
import { createPlayer } from '../actions/players'

class NewPlayerForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        const playerData = {
            name: this.state.name,
            game_id: this.props.game.id
        }
        this.props.createPlayer(playerData)
        this.props.history.push(`/game/${this.props.game.id}`)
    }

    handleChange = e => {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return <div>
            {this.props.gameLoader ? 'Loading game ID' : `ID: ${this.props.game.id}`}
            <form onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChange}
                    type='text' name='name'
                    value={this.state.name}
                    placeholder='Enter your name'
                />
                <input type='submit' value='Create Player' />
            </form>
        </div>
    } 
}

const mapStateToProps = state => {
    return {
        game: state.game,
        gameLoader: state.gameLoader
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPlayer: playerData => dispatch(createPlayer(playerData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPlayerForm)