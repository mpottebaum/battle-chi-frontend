import React from 'react'
// import { ActionCableConsumer } from 'react-actioncable-provider'
import { connect } from 'react-redux'
import { startCreatePlayer } from '../actions/players'

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
        this.props.startCreatePlayer(playerData)
    }

    handleChange = e => {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <input
                onChange={this.handleChange}
                type='text' name='name'
                value={this.state.name}
                placeholder='Enter your name'
            />
            <input type='submit' value='Create Player' />
        </form>
    } 
}

const mapStateToProps = state => {
    return {
        game: state.game
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startCreatePlayer: playerData => dispatch(startCreatePlayer(playerData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPlayerForm)