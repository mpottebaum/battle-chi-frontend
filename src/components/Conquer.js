import React from 'react'
import { connect } from 'react-redux'
import { conquer } from '../actions/battles'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Conquer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            numMilitia: props.battle.attack_militia
        }
    }

    renderOptions = () => {
        const attackNeighborhoodMilitia = this.props.militia.filter(militium => militium.neighborhood_id === this.props.battle.attack_neighborhood_id)
        const optionsArraySize = ((attackNeighborhoodMilitia.length - 1) - this.props.battle.attack_militia) + 1
        const numOptions = [...Array(optionsArraySize).keys()].map(i => i + this.props.battle.attack_militia)
        return numOptions.map(num => <option value={num}>{num}</option>)
    }

    handleChange = e => {
        this.setState({
            numMilitia: parseInt(e.target.value)
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.conquer(this.state.numMilitia, this.props.battle.id, this.props.battle.attack_player_id)
    }

    render() {
        return <Form onSubmit={this.handleSubmit} className='conquer'>
            <Form.Group as={Row}>
                <Col>
                    <h3>You conquered {this.props.defenseNeighborhood.name}</h3>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Col sm={7}>
                    <Form.Label>Select the number of militias to move from {this.props.attackNeighborhood.name}</Form.Label>
                </Col>
                <Col sm={2}>
                    <Form.Control as='select' className='battle-options' onChange={this.handleChange} value={this.state.numMilitia}>
                        {this.renderOptions()}
                    </Form.Control>
                </Col>
                <Col sm={3}>
                    <Button type='submit' size='lg' variant="outline-success">Move Militias</Button>
                </Col>
            </Form.Group>
        </Form>
    }
}

const mapStateToProps = state => {
    return {
        militia: state.game.militia,
        currentPlayer: state.currentPlayer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        conquer: (numMilitia, battleId, playerId) => dispatch(conquer(numMilitia, battleId, playerId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Conquer)