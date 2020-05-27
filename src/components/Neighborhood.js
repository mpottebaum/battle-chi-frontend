import React from 'react'
import { connect } from 'react-redux'
import { unselectNeighborhood } from '../actions/neighborhoods'
import PlaceMilitia from './PlaceMilitia'
import CardPlaceMilitia from './CardPlaceMilitia'
import Attack from './Attack'
import Fortify from './Fortify'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

class Neighborhood extends React.Component {
    
    findMilitia = () => {
        return this.props.game.militia.filter(militium => {
            return militium.neighborhood_id === this.props.neighborhood.id
        })
    }

    findPlayer = militium => {
        if(!militium) {
            return {name: 'N/A'}
        }
        return this.props.game.players.find(player => {
            return player.id === militium.player_id
        })
    }

    handleCloseClick = () => {
        this.props.unselectNeighborhood(this.props.neighborhood.name)
    }

    renderOpponentAction = () => {
        const militia = this.findMilitia()
        const player = this.findPlayer(militia[0])
        if(this.props.game.turn_stage === 1) {
            return <Attack
                player={player}
                neighborhood={this.props.neighborhood}
                />
        } else {
            return null
        }
    }

    renderPlayerAction = () => {
        const militia = this.findMilitia()
        const player = this.findPlayer(militia[0])
        switch(this.props.game.turn_stage) {
            case 0:
                if(player.cards.length >= 5 && !this.props.matchNeighborhoodCards) {
                    return null
                } else if(this.props.matchNeighborhoodCards) {
                    return <CardPlaceMilitia player={player} neighborhood={this.props.neighborhood} />
                } else {
                    return <PlaceMilitia player={player} neighborhood={this.props.neighborhood}/>
                }
            case 2:
                return <Fortify player={player} neighborhood={this.props.neighborhood}/>
            default:
                return null
        }
    }

    isControlled = player => {
        return player.id === this.props.currentPlayer.id
    }



    isCurrentPlayersTurn = () => {
        return this.props.currentPlayer.turn_order_num === this.props.game.turn_order_num
    }

    styleBackgroundColor = player => {
        if(player.name !== 'N/A') {
            const color = this.getBackgroundColor(player.turn_order_num)
            return {
                backgroundColor: color
            }
        } else {
            return {}
        }
    }

    getBackgroundColor = orderNum => {
        switch(orderNum) {
            case 1:
                return '#ffa6a6'
            case 2:
                return '#a6c2ff'
        }
    }

    render() {
        const militia = this.findMilitia()
        const player = this.findPlayer(militia[0])
        return <Card style={this.styleBackgroundColor(player)} className='neighborhood'>
            <Card.Body>
                <Button className='close-button' variant="outline-secondary" size="sm" onClick={this.handleCloseClick}>X</Button>
                <h3>{this.props.neighborhood.name}</h3>
                <h5>Zone: {this.props.neighborhood.zone.name}</h5>
                <Card.Text>
                    <Table style={{backgroundColor: '#fafafa'}}>
                        <thead>
                            <th>Controller</th>
                            <td>{player.name}</td>
                        </thead>
                        <tbody>
                            <th>Militias</th>
                            <td>{militia.length}</td>
                        </tbody>
                    </Table>
                </Card.Text>
                {
                    this.isCurrentPlayersTurn() ?
                    (
                        this.props.game.setup ?
                        (
                            player.name === 'no one' || this.isControlled(player) ?
                            <PlaceMilitia player={this.props.currentPlayer} neighborhood={this.props.neighborhood}/>
                            :
                            null
                        )
                        :
                        (
                            this.isControlled(player) ?
                            this.renderPlayerAction()
                            :
                            this.renderOpponentAction()
                        )
                    )
                    :
                    null
                }
            </Card.Body>
        </Card>
    }
}

const mapStateToProps = state => {
    return {
        game: state.game,
        currentPlayer: state.currentPlayer,
        matchNeighborhoodCards: state.matchNeighborhoodCards
    }
}

const mapDispatchToProps = dispatch => {
    return {
        unselectNeighborhood: name => dispatch(unselectNeighborhood(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Neighborhood)