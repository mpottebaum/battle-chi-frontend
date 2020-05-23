import React from 'react'
import Table from 'react-bootstrap/Table'
import { connect } from 'react-redux'

class PlayerTable extends React.Component {
    
    generateOrderNums = () => {
        return [...Array(this.props.game.num_players).keys()].map(i => i + 1)
    }

    getBackgroundColor = orderNum => {
        switch(orderNum) {
            case 1:
                return '#ffa6a6'
            case 2:
                return '#a6c2ff'
        }
    }

    getBackgroundStyle = orderNum => {
        if(this.props.turnPlayer.turn_order_num === orderNum) {
            const color = this.getBackgroundColor(orderNum)
            return {backgroundColor: color}
        } else {
            return {}
        }
    }

    renderPlayerHeads = () => {
        const orderNums = this.generateOrderNums()
        return orderNums.map(orderNum => {
            const player = this.props.game.players.find(player => player.turn_order_num === orderNum)
            return <th style={this.getBackgroundStyle(orderNum)}>{player.name}</th>
        })
    }

    renderMilitiaCounts = () => {
        const orderNums = this.generateOrderNums()
        return orderNums.map(orderNum => {
            const player = this.props.game.players.find(player => player.turn_order_num === orderNum)
            const militias = this.props.game.militia.filter(militium => militium.player_id === player.id)
            return <td style={this.getBackgroundStyle(orderNum)}>{militias.length}</td>
        })
    }

    renderNeighborhoodCounts = () => {
        const orderNums = this.generateOrderNums()
        return orderNums.map(orderNum => {
            const player = this.props.game.players.find(player => player.turn_order_num === orderNum)
            const militias = this.props.game.militia.filter(militium => militium.player_id === player.id)
            const neighbhorhoods = {}
            militias.forEach(militium => {
                if(neighbhorhoods[militium.neighborhood_id]) {
                    neighbhorhoods[militium.neighborhood_id] += 1
                } else {
                    neighbhorhoods[militium.neighborhood_id] = 1
                }
            })
            return <td style={this.getBackgroundStyle(orderNum)}>{Object.keys(neighbhorhoods).length}</td>
        })
    }

    renderZoneCounts = () => {
        const orderNums = this.generateOrderNums()
        return orderNums.map(orderNum => {
            const player = this.props.game.players.find(player => player.turn_order_num === orderNum)
            const militias = this.props.game.militia.filter(militium => militium.player_id === player.id)
            const neighborhoodIds = militias.map(militium => militium.neighborhood_id)
            const controlledZones = this.props.zones.filter(zone => {
                return zone.neighborhood_ids.every(id => neighborhoodIds.includes(id))
            })
            return <td style={this.getBackgroundStyle(orderNum)}>{controlledZones.length}</td>
        })
    }

    // renderCardCounts = () => {
    //     const orderNums = this.generateOrderNums()
    //     return orderNums.map(orderNum => {
    //         const player = this.props.game.players.find(player => player.turn_order_num === orderNum)
    //         return <td>{player.cards.length}</td>
    //     })
    // }
    
    render() {
        return <Table bordered hover size="sm">
                <thead>
                    <tr>
                        <td>Turn {this.props.game.turn_num}</td>
                        {this.renderPlayerHeads()}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Militias</th>
                        {this.renderMilitiaCounts()}
                    </tr>
                    <tr>
                        <th>Neighborhoods Controlled</th>
                        {this.renderNeighborhoodCounts()}
                    </tr>
                    <tr>
                        <th>Zones Controlled</th>
                        {this.renderZoneCounts()}
                    </tr>
                </tbody>
            </Table>
    }
}

const mapStateToProps = state => {
    return {
        zones: state.zones
    }
}

export default connect(mapStateToProps)(PlayerTable)