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

    renderDie = front => {
        if(front) {
            return <img className='die-img' src={`/dice/${front.result}.jpg`} />
        } else {
            return null
        }
    }

    createResults = (sortedAttackFronts, sortedDefenseFronts) => {
        const results = {}
        const shorterArr = sortedDefenseFronts.length <= sortedAttackFronts.length ? sortedDefenseFronts : sortedAttackFronts
        for(let i=0; i < shorterArr.length; i++) {
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
            lost += -1
        }
        if(results[1] && results[1] === 'defense') {
            lost += -1
        }
        return lost
    }

    defenseMilitiasLost = (sortedAttackFronts, sortedDefenseFronts) => {
        const results = this.createResults(sortedAttackFronts, sortedDefenseFronts)
        let lost = 0
        if(results[0] === 'attack') {
            lost -= 1
        }
        if(results[1] && results[1] === 'attack') {
            lost -= 1
        }
        return lost
    }

    styleDieFrame = (player, resultsValue) => {
        const styleObj = {}
        if(player.turn_order_num === 1) {
            styleObj.backgroundColor = '#ffa6a6'
        } else if(player.turn_order_num === 2) {
            styleObj.backgroundColor = '#a6c2ff'
        }
        
        if(player.id === this.props.battle.attack_player_id){
            if(resultsValue) {
                if(resultsValue === 'attack') {
                    styleObj.border = 'solid green'
                } else {
                    styleObj.border = 'solid red'
                }
            }
        } else if(player.id === this.props.battle.defense_player_id){
            if(resultsValue) {
                if(resultsValue === 'defense') {
                    styleObj.border = 'solid green'
                } else {
                    styleObj.border = 'solid red'
                }
            }
        }
        return styleObj
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
        const results = this.createResults(sortedAttackFronts, sortedDefenseFronts)
        return <div>
            <div className='center'>
                <h1>Battle</h1>
            </div>
            <div className='fronts'>
                <div className='attack-fronts'>
                    <div className='front-attack' style={this.styleDieFrame(attackPlayer, results[0])}>
                        {this.renderDie(sortedAttackFronts[0])}
                    </div>
                    {
                        sortedAttackFronts[1] ?
                            <div className='front-attack' style={this.styleDieFrame(attackPlayer, results[1])}>
                                {sortedAttackFronts[1] ? this.renderDie(sortedAttackFronts[1]) : null}
                            </div>
                            :
                            null

                    }
                    {
                        sortedAttackFronts[2] ?
                            <div className='front-attack' style={this.styleDieFrame(attackPlayer, results[2])}>
                                {this.renderDie(sortedAttackFronts[2])}
                            </div>
                            :
                            null

                    }
                </div>
                <div className='defense-fronts'>
                    <div className='front-defense' style={this.styleDieFrame(defensePlayer, results[0])}>
                        {this.renderDie(sortedDefenseFronts[0])}
                    </div>
                    {
                        sortedDefenseFronts[1] ?
                            <div className='front-defense' style={this.styleDieFrame(defensePlayer, results[1])}>
                                {sortedDefenseFronts[1] ? this.renderDie(sortedDefenseFronts[1]) : null}
                            </div>
                            :
                            null
                    }
                </div>
            </div>
            <Table bordered className='battle-table'>
                <thead>
                    <tr>
                        <th></th>
                        <th style={{textAlign: 'center'}}>Casualties</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>                    
                        <th style={this.styleNeighborhoodBg(attackPlayer)}>{attackNeighborhood.name}</th>
                        <td style={{textAlign: 'center'}}>{this.attackMilitiasLost(sortedAttackFronts, sortedDefenseFronts)}</td>
                    </tr>
                    <tr>                    
                        <th style={this.styleNeighborhoodBg(defensePlayer)}>{defenseNeighborhood.name}</th>
                        <td style={{textAlign: 'center'}}>{this.defenseMilitiasLost(sortedAttackFronts, sortedDefenseFronts)}</td>
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