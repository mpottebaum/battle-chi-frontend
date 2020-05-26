import React from 'react'
import { connect } from 'react-redux'
import { createGame, joinGame } from '../actions/games'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class MainMenu extends React.Component {
    constructor() {
        super()
        this.state = {
            gameId: '',
            createOption: 'normal'
        }
    }

    handleCreateSubmit = e => {
        e.preventDefault()
        // console.log(this.state.createOption)
        this.props.createGame(this.state.createOption)
    }

    handleCreateChange = e => {
        this.setState({
            createOption: e.target.value
        })
    }

    handleJoinChange = e => {
        this.setState({
            gameId: e.target.value
        })
    }

    handleJoinSubmit = e => {
        e.preventDefault()
        this.props.joinGame(this.state.gameId)
    }

    handleResumeClick = () => {
        const gameId = localStorage.getItem('gameId')
        this.props.history.push(`/game/${gameId}`)
    }

    renderResume = () => {
        const gameId = localStorage.getItem('gameId')
        return gameId ? <Button onClick={this.handleResumeClick} size='lg' variant='outline-secondary'>Resume Current Game</Button> : null
    }

    render() {
        return <div className='main-menu'>
            <div className='resume-game'>
                {this.renderResume()}
            </div>
            <div className='create-game'>
                <Form onSubmit={this.handleCreateSubmit}>
                    <Form.Group as={Row} className='create-options'>
                        <Col sm={6}>
                            <Form.Check 
                                onChange={this.handleCreateChange}
                                type='radio'
                                id='default-radio'
                                name='setup'
                                value='normal'
                                checked={this.state.createOption === 'normal'}
                            />
                            <Form.Label>Normal Setup</Form.Label>
                        </Col>
                        <Col sm={6}>
                            <Form.Check 
                                onChange={this.handleCreateChange}
                                type='radio'
                                id='default-radio'
                                name='setup'
                                value='random'
                                checked={this.state.createOption === 'random'}
                            />
                            <Form.Label>Random Setup</Form.Label>
                        </Col>
                    </Form.Group>
                <Button onClick={this.handleCreateClick} type='submit' size='lg' variant='outline-secondary'>Create Game</Button>
                </Form>
            </div>
            <div className='join-game'>
                <Form onSubmit={this.handleJoinSubmit}>
                    <Form.Group>
                        <Form.Control onChange={this.handleJoinChange} type='number' name='gameId' placeholder='Enter Game ID' value={this.state.gameId} />
                    </Form.Group>
                    <Button type='submit' size='lg' variant='outline-secondary'>Join Game</Button>
                </Form>
            </div>
        </div>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createGame: setup => dispatch(createGame(setup)),
        joinGame: id => dispatch(joinGame(id))
    }
}

export default connect(null, mapDispatchToProps)(MainMenu)