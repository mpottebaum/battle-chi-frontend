import React from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { displayZone } from '../actions/zones'

class Zone extends React.Component {

    neighborhoodStyle = neighborhood => {
        const militia = this.props.game.militia.find(militium => militium.neighborhood_id === neighborhood.id)
        if(militia) {
            const player = this.props.game.players.find(player => player.id === militia.player_id)
            switch(player.turn_order_num) {
                case 1:
                    return {
                        backgroundColor: '#ffa6a6'
                    }
                case 2:
                    return {
                        backgroundColor: '#a6c2ff'
                    }
            }
        } else {
            return {
                backgroundColor: '#fffac2'
            }
        }
    }

    renderNeighborhoods = () => {
        return this.props.zone.neighborhood_ids.map(neighborhoodId => {
            const neighborhood = this.props.neighborhoods.find(neighborhood => neighborhood.id === neighborhoodId)
            return <ListGroup.Item style={this.neighborhoodStyle(neighborhood)}>{neighborhood.name}</ListGroup.Item>
        })
    }

    isControlled = () => {
        const militias = this.props.game.militia.filter(militium => this.props.zone.neighborhood_ids.includes(militium.neighborhood_id))
        if(militias.length > 0 && militias.every(militium => militium.player_id === militias[0].player_id)) {
            const militium = this.props.game.militia.find(militium => this.props.zone.neighborhood_ids.includes(militium.neighborhood_id))
            return this.props.game.players.find(player => player.id === militium.player_id)
        } else {
            return null
        }
    }

    renderControlled = () => {
        if (this.isControlled()) {
            return 'Controlled'
        } else {
            return 'Disputed'
        }
    }

    badgeStyle = () => {
        if(this.isControlled()) {
            const player = this.isControlled()
            switch(player.turn_order_num) {
                case 1:
                    return {
                        backgroundColor: '#ffa6a6',
                        color: 'black'
                    }
                case 2:
                    return {
                        backgroundColor: '#a6c2ff',
                        color: 'black'
                    }
            }
        } else {
            return {
                backgroundColor: 'gray'
            }
        }
    }

    handleClick = () => {
        this.props.displayZone(this.props.zone.id)
    }

    render() {
        return <Card style={{textAlign: 'center'}}>
            <Card.Header>
                <Card.Title>{this.props.zone.name}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Button onClick={this.handleClick} variant='outline-secondary' size='lg' className='view-zone'>View Zone</Button>
                <Card.Text>{this.renderControlled()}</Card.Text>
                <Badge variant='bonus' style={this.badgeStyle()}>+{this.props.zone.num_militia} Militias</Badge>
                <div className='zone-neighborhoods'>
                    <ListGroup>
                        {this.renderNeighborhoods()}
                    </ListGroup>
                </div>
            </Card.Body>
        </Card>
    }
}

const mapStateToProps = state => {
    return {
        neighborhoods: state.neighborhoods,
        game: state.game
    }
}

const mapDispatchToProps = dispatch => {
    return {
        displayZone: zoneId => dispatch(displayZone(zoneId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Zone)