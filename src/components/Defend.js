import React from 'react'
import { connect } from 'react-redux'
import { setBattleDefense } from '../actions/battles'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

class Defend extends React.Component {
    constructor() {
        super()
        this.state = {
            numMilitia: 1
        }
    }

    findDefenseNeighborhood = () => {
        return this.props.neighborhoods.find(neighborhood => {
            return neighborhood.id === this.props.battle.defense_neighborhood_id
        })
    }

    findAttackNeighborhood = () => {
        return this.props.neighborhoods.find(neighborhood => {
            return neighborhood.id === this.props.battle.attack_neighborhood_id
        })
    }

    findAttacker = () => {
        return this.props.game.players.find(player => {
            return player.id === this.props.battle.attack_player_id
        })
    }

    findMilitia = neighborhood => {
        return this.props.game.militia.filter(militium => {
            return militium.neighborhood_id === neighborhood.id
        })
    }

    renderOptions = defenseNeighborhood => {
        const militia = this.findMilitia(defenseNeighborhood)
        const numOptions = []
        if(militia.length > 1) {
            numOptions.push(1, 2)
        } else {
            numOptions.push(1)
        }
        return numOptions.map(num => <option value={num}>{num}</option>)
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.setBattleDefense(this.state.numMilitia, this.props.currentPlayer.id, this.props.battle.id)
    }

    handleChange = e => {
        this.setState({
            numMilitia: parseInt(e.target.value)
        })
    }

    render() {
        const defenseNeighborhood = this.findDefenseNeighborhood()
        const defenseMilitia = this.findMilitia(defenseNeighborhood)
        const attackNeighborhood = this.findAttackNeighborhood()
        const attackMilitia = this.findMilitia(attackNeighborhood)
        const attacker = this.findAttacker()
        const numAttackMilitias = this.props.battle.attack_militia
        return <Form onSubmit={this.handleSubmit} className='center'>
            <Form.Group>
                <Form.Text>{attacker.name} has attacked {defenseNeighborhood.name} with {numAttackMilitias} militias</Form.Text>
            </Form.Group>
            <Form.Group>
                <Table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Neighborhood</th>
                            <th>Total Militias</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Attack</th>
                            <td>{attackNeighborhood.name}</td>
                            <td>{attackMilitia.length}</td>
                        </tr>
                        <tr>
                            <th>Defense</th>
                            <td>{defenseNeighborhood.name}</td>
                            <td>{defenseMilitia.length}</td>
                        </tr>
                    </tbody>
                </Table>
            </Form.Group>
            <Form.Group>
                <Form.Label>Select the number of militias to defend your neighborhood</Form.Label>
                <Form.Control as='select' onChange={this.handleChange} value={this.state.numMilitia} className='number-select'>
                    {this.renderOptions(defenseNeighborhood)}
                </Form.Control>
            </Form.Group>
            <Button type='submit'>Defend</Button>
        </Form>
    }
}

const mapStateToProps = state => {
    return {
        game: state.game,
        neighborhoods: state.neighborhoods,
        currentPlayer: state.currentPlayer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setBattleDefense: (numMilitia, currentPlayerId, battleId) => dispatch(setBattleDefense(numMilitia, currentPlayerId, battleId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Defend)