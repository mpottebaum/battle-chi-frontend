import React from 'react'
import { connect } from 'react-redux'
import { setBattleDefense } from '../actions/battles'

class Defend extends React.Component {
    constructor() {
        super()
        this.state = {
            numMilitia: 1
        }
    }

    findNeighborhood = () => {
        return this.props.neighborhoods.find(neighborhood => {
            return neighborhood.id === this.props.battle.defense_neighborhood_id
        })
    }

    findAttacker = () => {
        return this.props.game.players.find(player => {
            return player.id === this.props.battle.attack_player_id
        })
    }

    findMilitia = () => {
        return this.props.game.militia.filter(militium => {
            return militium.neighborhood_id === this.props.battle.defense_neighborhood_id
        })
    }

    renderOptions = () => {
        const militia = this.findMilitia()
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
        const neighborhood = this.findNeighborhood()
        const militia = this.findMilitia()
        const attacker = this.findAttacker()
        const numAttackMilitias = this.props.battle.attack_militia
        return <form onSubmit={this.handleSubmit}>
            <p>{attacker.name} has attacked {neighborhood.name} with {numAttackMilitias} militias</p>
            <p>{neighborhood.name} has {militia.length} militias</p>
            <label>Select the number of militias to defend your neighborhood</label>
            <select onChange={this.handleChange} value={this.state.numMilitia}>
                {this.renderOptions()}
            </select>
            <input type='submit' value='Defend' />
        </form>
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