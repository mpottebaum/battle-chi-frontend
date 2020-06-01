import React from 'react'
import { connect } from 'react-redux'
import { createPlayer } from '../../actions/players'
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
        this.props.history.push(`/lobby/${this.props.game.id}`)
    }

    handleChange = e => {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return <div>
            {
                this.props.gameLoader ?
                <Spinner />
                :
                <div>
                    <h3>Game ID: {this.props.game.id}</h3>
                    <p>Share this game ID with your opponent so they can join the game</p>
                </div>
            }
            <Form onSubmit={this.handleSubmit} className='new-player'>
                <Form.Group>
                    <Form.Control
                        onChange={this.handleChange}
                        type='text' name='name'
                        value={this.state.name}
                        placeholder='Enter your name'
                    />
                </Form.Group>
                <Button type='submit' variant='outline-secondary' size='lg'>Create Player</Button>
            </Form>
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