import React from 'react'
import { connect } from 'react-redux'
import { setBattleDefense } from '../../actions/battles'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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

    styleBackground = player => {
        switch(player.turn_order_num) {
            case 0:
                return {
                    backgroundColor: '#fffac2'
                }
            case 1:
                return {
                    backgroundColor: '#ffa6a6'
                }
            case 2:
                return {
                    backgroundColor: '#a6c2ff'
                }
        }
    }

    styleDatum = player => {
        const background = this.styleBackground(player)
        return {
            ...background,
            textAlign: 'center'
        }
    }

    findPlayer = militia => {
        if(militia.length > 0) {
            return this.props.game.players.find(player => player.id === militia[0].player_id)
        } else {
            return {turn_order_num: 0}
        }
    }

    render() {
        const defenseNeighborhood = this.findDefenseNeighborhood()
        const defenseMilitia = this.findMilitia(defenseNeighborhood)
        const defensePlayer = this.findPlayer(defenseMilitia)
        const attackNeighborhood = this.findAttackNeighborhood()
        const attackMilitia = this.findMilitia(attackNeighborhood)
        const attackPlayer = this.findPlayer(attackMilitia)
        const attacker = this.findAttacker()
        const numAttackMilitias = this.props.battle.attack_militia
        return <div>

        <Table bordered className='defend-table'>
            <thead>
                <tr>
                    <th></th>
                    <th style={{textAlign: 'center'}}>Neighborhood</th>
                    <th style={{textAlign: 'center'}}>Total Militias</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Attack</th>
                    <td style={this.styleDatum(attackPlayer)}>{attackNeighborhood.name}</td>
                    <td style={this.styleDatum(attackPlayer)}>{attackMilitia.length}</td>
                </tr>
                <tr>
                    <th>Defense</th>
                    <td style={this.styleDatum(defensePlayer)}>{defenseNeighborhood.name}</td>
                    <td style={this.styleDatum(defensePlayer)}>{defenseMilitia.length}</td>
                </tr>
            </tbody>
        </Table>
        <Form onSubmit={this.handleSubmit} className='center defend-form'>
            <Form.Group as={Row}>
                <Col>
                    <h3>{attacker.name} attacked {defenseNeighborhood.name} with {numAttackMilitias} militias</h3>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Col sm={2} className='defend-label' >
                </Col>
                <Col sm={8}>
                    <Form.Label>Select the number of militias to send in defense</Form.Label>
                </Col>
                <Col sm={2} className='defend-label' >
                </Col>
            </Form.Group>
            <Row>
                <Col sm={5} className='defend-select' >
                </Col>
                <Col sm={1}>
                    <Form.Control as='select' className='battle-options' onChange={this.handleChange} value={this.state.numMilitia}>
                        {this.renderOptions(defenseNeighborhood)}
                    </Form.Control>
                </Col>
                <Col sm={1}>
                    <Button type='submit' size='lg'>Defend</Button>
                </Col>
                <Col sm={5} className='defend-select' >
                </Col>
            </Row>
        </Form>
        </div>

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