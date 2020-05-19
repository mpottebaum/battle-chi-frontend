import React from 'react'
import { connect } from 'react-redux'
import ContinueAttack from './ContinueAttack'
import Conquer from './Conquer'

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

    renderAttackFronts = () => {
        const attackFronts = this.props.battle.battle_fronts.filter(front => front.player_id === this.props.battle.attack_player_id)
        const sortedAttackFronts = attackFronts.sort((frontA, frontB) => frontB.result - frontA.result)
        return sortedAttackFronts.map(front => {
            return <td>{front.result}</td>
        })
    }

    renderDefenseFronts = () => {
        const defenseFronts = this.props.battle.battle_fronts.filter(front => front.player_id === this.props.battle.defense_player_id)
        const sortedDefenseFronts = defenseFronts.sort((frontA, frontB) => frontB.result - frontA.result)
        return sortedDefenseFronts.map(front => {
            return <td>{front.result}</td>
        })
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

    render() {
        const attackPlayer = this.findAttackPlayer()
        const attackNeighborhood = this.findAttackNeighborhood()
        const defensePlayer = this.findDefensePlayer()
        const defenseNeighborhood = this.findDefenseNeighborhood()
        return <div>
            <h1>Battle Results:</h1>
            <table>
                <thead>
                    <tr>
                        <th>Neighborhood</th>
                        <th>Player</th>
                        <th>First Front</th>
                        <th>Second Front</th>
                        <th>Third Front</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>                    
                        <td>{attackNeighborhood.name}</td>
                        <td>{attackPlayer.name}</td>
                        {this.renderAttackFronts()}
                    </tr>
                    <tr>                    
                        <td>{defenseNeighborhood.name}</td>
                        <td>{defensePlayer.name}</td>
                        {this.renderDefenseFronts()}
                    </tr>
                </tbody>
            </table>
            {
                this.props.battle.attack_player_id === this.props.currentPlayer.id ?
                this.renderButton()
                :
                null
            }
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