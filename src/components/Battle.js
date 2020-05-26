import React from 'react'
import { connect } from 'react-redux'
import ContinueAttack from './ContinueAttack'
import Conquer from './Conquer'
import Table from 'react-bootstrap/Table'

class Battle extends React.Component {

    findAttackPlayer = () => {
        return this.props.game.players.find(player => player.id === this.props.battle.attack_player_id)
    }

    findAttackNeighborhood = () => {
        return this.props.neighborhoods.find(neighborhood => neighborhood.id === this.props.battle.attack_neighborhood_id)
    }

    findDefensePlayer = () => {
        return this.props.game.players.find(player => player.id === this.props.battle.defense_player_id)
    }

    findDefenseNeighborhood = () => {
        return this.props.neighborhoods.find(neighborhood => neighborhood.id === this.props.battle.defense_neighborhood_id)
    }

    findDefenseNeighborhoodMilitia = neighborhood => {
        return this.props.game.militia.filter(militium => militium.neighborhood_id === neighborhood.id)
    }

    getAttackFronts = () => {
        return this.props.battle.battle_fronts.filter(front => front.player_id === this.props.battle.attack_player_id)
    }

    getDefenseFronts = () => {
        return this.props.battle.battle_fronts.filter(front => front.player_id === this.props.battle.defense_player_id)
    }

    renderAttackFronts = (sortedAttackFronts, sortedDefenseFronts) => {
        const results = this.createResults(sortedAttackFronts, sortedDefenseFronts)
        let i = -1
        return sortedAttackFronts.map(front => {
            i++
            if(i <= 1) {
                return results[i] && results[i] === 'attack' ?
                    <td style={{backgroundColor: 'black', color: 'white'}}>{front.result}</td>
                    :
                    <td>{front.result}</td>
            }  else {
                return <td>{front.result}</td>
            }
        })
    }

    renderDefenseFronts = (sortedAttackFronts, sortedDefenseFronts) => {
        const results = this.createResults(sortedAttackFronts, sortedDefenseFronts)
        console.log(results)
        let i = -1
        return sortedDefenseFronts.map(front => {
            i++
            if(i <= 1) {
                return results[i] && results[i] === 'defense' ?
                    <td style={{backgroundColor: 'black', color: 'white'}}>{front.result}</td>
                    :
                    <td>{front.result}</td>
            }  else {
                return <td>{front.result}</td>
            }
        })
    }

    renderDie = front => {
        if(front) {
            return <img className='die-img' src={`/dice/${front.result}.jpg`} />
        } else {
            return null
        }
    }



    createResults = (sortedAttackFronts, sortedDefenseFronts) => {
        const results = {}
        for(let i=0; i < sortedDefenseFronts.length; i++) {
            if(sortedDefenseFronts[i].result >= sortedAttackFronts[i].result){
                results[i] = 'defense'
            } else {
                results[i] = 'attack'
            }    
        }
        return results
    }

    sortFronts = fronts => {
        return fronts.sort((frontA, frontB) => frontB.result - frontA.result)
    }

    attackMilitiasLost = (sortedAttackFronts, sortedDefenseFronts) => {
        const results = this.createResults(sortedAttackFronts, sortedDefenseFronts)
        let lost = 0
        if(results[0] === 'defense') {
            lost += 1
        }
        if(results[1] && results[1] === 'defense') {
            lost += 1
        }
        return lost
    }

    defenseMilitiasLost = (sortedAttackFronts, sortedDefenseFronts) => {
        const results = this.createResults(sortedAttackFronts, sortedDefenseFronts)
        let lost = 0
        if(results[0] === 'attack') {
            lost += 1
        }
        if(results[1] && results[1] === 'attack') {
            lost += 1
        }
        return lost
    }

    styleNeighborhoodBg = player => {
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
    }

    renderButton = () => {
        const defenseNeighborhood = this.findDefenseNeighborhood()
        const defenseNeighborhoodMilitia = this.findDefenseNeighborhoodMilitia(defenseNeighborhood)
        const attackNeighborhood = this.findAttackNeighborhood()
        return defenseNeighborhoodMilitia.length === 0 ?
            <Conquer battle={this.props.battle} defenseNeighborhood={defenseNeighborhood} attackNeighborhood={attackNeighborhood}/>
            :
            <ContinueAttack battle={this.props.battle} playerId={this.props.currentPlayer.id}/>
    }

    numFrontsColumns = (sortedAttackFronts, sortedDefenseFronts) => {
        if(sortedAttackFronts.length === 3) {
            return 3
        } else if(sortedAttackFronts.length === 2 | sortedDefenseFronts === 2) {
            return 2
        } else {
            return 1
        }
    }

    render() {
        const attackPlayer = this.findAttackPlayer()
        const attackNeighborhood = this.findAttackNeighborhood()
        const defensePlayer = this.findDefensePlayer()
        const defenseNeighborhood = this.findDefenseNeighborhood()
        const attackFronts = this.getAttackFronts()
        const defenseFronts = this.getDefenseFronts()
        const sortedAttackFronts = this.sortFronts(attackFronts)
        const sortedDefenseFronts = this.sortFronts(defenseFronts)
        return <div>
            <div className='center'>
                <h1>Battle</h1>
            </div>
            <div className='fronts' style={{gridTemplateColumns: `repeat(${this.numFrontsColumns(sortedAttackFronts, sortedDefenseFronts)}, 100px)`}}>
                <div className='front'>
                    <div className='front-attack' style={this.styleNeighborhoodBg(attackPlayer)}>
                        {this.renderDie(sortedAttackFronts[0])}
                    </div>
                    <div className='front-defense' style={this.styleNeighborhoodBg(defensePlayer)}>
                        {this.renderDie(sortedDefenseFronts[0])}
                    </div>
                </div>
                {
                    sortedAttackFronts[1] || sortedDefenseFronts[1] ?
                        <div className='front'>
                            <div className='front-attack' style={this.styleNeighborhoodBg(attackPlayer)}>
                                {sortedAttackFronts[1] ? this.renderDie(sortedAttackFronts[1]) : null}
                            </div>
                            <div className='front-defense' style={this.styleNeighborhoodBg(defensePlayer)}>
                                {sortedDefenseFronts[1] ? this.renderDie(sortedDefenseFronts[1]) : null}
                            </div>
                        </div>
                        :
                        null

                }
                {
                    sortedAttackFronts[2] ?
                        <div className='front'>
                            <div className='front-attack' style={this.styleNeighborhoodBg(attackPlayer)}>
                                {this.renderDie(sortedAttackFronts[2])}
                            </div>
                            <div className='front-defense' style={this.styleNeighborhoodBg(defensePlayer)}></div>
                        </div>
                        :
                        null

                }
            </div>
            <Table bordered>
                <thead>
                    <tr>
                        <th></th>
                        <th>Militias Lost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>                    
                        <th style={this.styleNeighborhoodBg(attackPlayer)}>{attackNeighborhood.name}</th>
                        <td>{this.attackMilitiasLost(sortedAttackFronts, sortedDefenseFronts)}</td>
                    </tr>
                    <tr>                    
                        <th style={this.styleNeighborhoodBg(defensePlayer)}>{defenseNeighborhood.name}</th>
                        <td>{this.defenseMilitiasLost(sortedAttackFronts, sortedDefenseFronts)}</td>
                    </tr>
                </tbody>
            </Table>
            <div className='center'>
                {
                    this.props.battle.attack_player_id === this.props.currentPlayer.id ?
                    this.renderButton()
                    :
                    null
                }
            </div>
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

export default connect(mapStateToProps)(Battle)