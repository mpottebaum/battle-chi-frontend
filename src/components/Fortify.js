import React from 'react'
import { connect } from 'react-redux'
import { fortify } from '../actions/players'

class Fortify extends React.Component {
    constructor() {
        super()
        this.state = {
            numMilitia: 1,
            neighborhoodId: ''
        }
    }
    
    isAdjacentAndControlled = militium => {
        const { neighborhood, currentPlayer } = this.props
        return neighborhood.adjacent_neighborhood_ids.includes(militium.neighborhood_id) && militium.player_id === currentPlayer.id
    }

    renderNeighborhoodOptions = () => {
        const currentPlayersAdjMilitia = this.props.militia.filter(militium => {
            return this.isAdjacentAndControlled(militium)
        })
        const militiaNeighborhoodIds = currentPlayersAdjMilitia.map(militium => militium.neighborhood_id)
        const neighborhoodMilitiaCounts = {}
        militiaNeighborhoodIds.forEach(id => { neighborhoodMilitiaCounts[id] = ( neighborhoodMilitiaCounts[id] || 0) + 1 })
        Object.keys(neighborhoodMilitiaCounts).forEach(key => {
            if(neighborhoodMilitiaCounts[key] < 2) {
                delete neighborhoodMilitiaCounts[key]
            }
        })
        const neighborhoodOptions = this.props.neighborhoods.filter(neighborhood => Object.keys(neighborhoodMilitiaCounts).includes(neighborhood.id.toString()))
        return neighborhoodOptions.map(neighborhood => {
            return <option value={neighborhood.id}>{neighborhood.name}</option>
        })
    }

    renderMilitiaOptions = () => {
        let numOptions = []
        if(this.state.neighborhoodId) {
            const neighborhoodMilitia = this.props.militia.filter(militium => militium.neighborhood_id === this.state.neighborhoodId)
            const optionsArraySize = neighborhoodMilitia.length - 1
            numOptions = [...Array(optionsArraySize).keys()].map(i => i + 1)
        }
        return numOptions.map(num => <option value={num}>{num}</option>)
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: parseInt(e.target.value)
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.fortify(this.props.currentPlayer.id, this.props.neighborhood.id, this.state.neighborhoodId, this.state.numMilitia)
    }
    
    render() {
        return <form onSubmit={this.handleSubmit}>
            <p>Fortify Neighborhood</p>
            <label htmlFor='neighborhoodId'>Move militias from:</label>
            <select value={this.state.neighborhoodId} onChange={this.handleChange} name='neighborhoodId'>
                <option value='' disabled>Select Neighborhood</option>
                {this.renderNeighborhoodOptions()}
            </select>
            <label>Number of Militias:</label>
            <select value={this.state.numMilitia} onChange={this.handleChange} name='numMilitia'>
                {this.renderMilitiaOptions()}
            </select>
            <input type='submit' value='Fortify'/>
        </form>
    }
}

const mapStateToProps = state => {
    return {
        neighborhoods: state.neighborhoods,
        militia: state.game.militia,
        currentPlayer: state.currentPlayer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fortify: (playerId, toNeighborhoodId, fromNeighborhoodId, numMilitia) => dispatch(fortify(playerId, toNeighborhoodId, fromNeighborhoodId, numMilitia))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fortify)