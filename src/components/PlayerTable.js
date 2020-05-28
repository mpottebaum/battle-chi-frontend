import React from 'react'
import Table from 'react-bootstrap/Table'
import { connect } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner'
import ResetMap from './ResetMap'
import ExitGame from './ExitGame'

class PlayerTable extends React.Component {
    

    generateOrderNums = () => {
        return [...Array(this.props.game.num_players).keys()].map(i => i + 1)
    }

    getBackgroundStyle = orderNum => {
        switch(orderNum) {
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
    
    getTextAlign = () => {
        return {
            textAlign: 'center'
        }
    }

    getTdStyle = orderNum => {
        const backgroundStyle = this.getBackgroundStyle(orderNum)
        const textAlignStyle = this.getTextAlign()
        return {
            ...backgroundStyle,
            ...textAlignStyle
        }
    }

    // renderPlayerHeads = () => {
    //     const orderNums = this.generateOrderNums()
    //     return orderNums.map(orderNum => {
    //         const player = this.props.game.players.find(player => player.turn_order_num === orderNum)
    //         if(this.props.game.turn_order_num === orderNum) {
    //             return <th style={this.getBackgroundStyle(orderNum)}>
    //                     {player.name}
    //                     <Spinner animation="grow" size="sm" className='turn-indicator' />
    //                 </th>
    //         } else {
    //             return <th>{player.name}</th>
    //         }
    //     })
    // }

    // renderMilitiaCounts = () => {
    //     const orderNums = this.generateOrderNums()
    //     return orderNums.map(orderNum => {
    //         const player = this.props.game.players.find(player => player.turn_order_num === orderNum)
    //         const militias = this.props.game.militia.filter(militium => militium.player_id === player.id)
    //         return <td style={this.getBackgroundStyle(orderNum)}>{militias.length}</td>
    //     })
    // }

    // renderNeighborhoodCounts = () => {
    //     const orderNums = this.generateOrderNums()
    //     return orderNums.map(orderNum => {
    //         const player = this.props.game.players.find(player => player.turn_order_num === orderNum)
    //         const militias = this.props.game.militia.filter(militium => militium.player_id === player.id)
    //         const neighbhorhoods = {}
    //         militias.forEach(militium => {
    //             if(neighbhorhoods[militium.neighborhood_id]) {
    //                 neighbhorhoods[militium.neighborhood_id] += 1
    //             } else {
    //                 neighbhorhoods[militium.neighborhood_id] = 1
    //             }
    //         })
    //         return <td style={this.getBackgroundStyle(orderNum)}>{Object.keys(neighbhorhoods).length}</td>
    //     })
    // }

    // renderZoneCounts = () => {
    //     const orderNums = this.generateOrderNums()
    //     return orderNums.map(orderNum => {
    //         const player = this.props.game.players.find(player => player.turn_order_num === orderNum)
    //         const militias = this.props.game.militia.filter(militium => militium.player_id === player.id)
    //         const neighborhoodIds = militias.map(militium => militium.neighborhood_id)
    //         const controlledZones = this.props.zones.filter(zone => {
    //             return zone.neighborhood_ids.every(id => neighborhoodIds.includes(id))
    //         })
    //         return <td style={this.getBackgroundStyle(orderNum)}>{controlledZones.length}</td>
    //     })
    // }

    renderPlayerHead = player => {
        if(this.props.game.turn_order_num === player.turn_order_num) {
            return <th style={this.getBackgroundStyle(player.turn_order_num)}>
                    {player.name}
                    <Spinner animation="grow" size="sm" className='turn-indicator' />
                </th>
        } else {
            return <th>{player.name}</th>
        }
    }

    renderMilitiaCount = (player, militias) => {
        return <td style={this.getTdStyle(player.turn_order_num)}>{militias.length}</td>
    }
    
    renderNeighborhoodCount = (player, militias) => {
        const neighbhorhoods = {}
        militias.forEach(militium => {
            if(neighbhorhoods[militium.neighborhood_id]) {
                neighbhorhoods[militium.neighborhood_id] += 1
            } else {
                neighbhorhoods[militium.neighborhood_id] = 1
            }
        })
        return <td style={this.getTdStyle(player.turn_order_num)}>{Object.keys(neighbhorhoods).length}</td>

    }

    renderZoneCount = (player, militias) => {
        const neighborhoodIds = militias.map(militium => militium.neighborhood_id)
        const controlledZones = this.props.zones.filter(zone => {
            return zone.neighborhood_ids.every(id => neighborhoodIds.includes(id))
        })
        return <td style={this.getTdStyle(player.turn_order_num)}>{controlledZones.length}</td>
    }

    renderPlayerRows = () => {
        const orderNums = this.generateOrderNums()
        return orderNums.map(orderNum => {
            const player = this.props.game.players.find(player => player.turn_order_num === orderNum)
            const militias = this.props.game.militia.filter(militium => militium.player_id === player.id)
            return <tr>
                {this.renderPlayerHead(player)}
                {this.renderNeighborhoodCount(player, militias)}
                {this.renderZoneCount(player, militias)}
                {this.renderMilitiaCount(player, militias)}
            </tr>
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
        return <div className='player-table'>
            <Table bordered hover size="sm">
                <thead>
                    <tr style={{fontSize: 'small'}}>
                        <td>Turn {this.props.game.turn_num}</td>
                        <th style={this.getTextAlign()}>Neighborhoods</th>
                        <th style={this.getTextAlign()}>Zones</th>
                        <th style={this.getTextAlign()}>Militias</th>
                        {/* {this.renderPlayerHeads()} */}
                    </tr>
                </thead>
                <tbody>
                    {this.renderPlayerRows()}
                    {/* <tr>
                        {this.renderMilitiaCounts()}
                    </tr>
                    <tr>
                        <th>Neighborhoods Controlled</th>
                        {this.renderNeighborhoodCounts()}
                    </tr>
                    <tr>
                        <th>Zones Controlled</th>
                        {this.renderZoneCounts()}
                    </tr> */}
                </tbody>
            </Table>
            <div className='center'>
                <ExitGame history={this.props.history}/>
                <ResetMap />
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        zones: state.zones,
        game: state.game
    }
}

export default connect(mapStateToProps)(PlayerTable)