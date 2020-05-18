import React from 'react'
import { connect } from 'react-redux'

class Attack extends React.Component {
    constructor() {
        super()
        this.state = {
            neighborhoodId: '',
            numMilitia: 1
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
        const neighborhoodMilitia = this.props.militia.filter(militium => militium.neighborhood_id === this.state.neighborhoodId)
        const numOptions = []
        if(neighborhoodMilitia.length === 2) {
            numOptions.push(1)
        } else if(neighborhoodMilitia.length === 3) {
            numOptions.push(1, 2)
        } else if(neighborhoodMilitia.length > 3) {
            numOptions.push(1, 2, 3)
        }
        return numOptions.map(num => {
            return <option value={num}>{num}</option>
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        if(this.state.neighborhoodId === '') {
            alert('Select A Neighborhood To Attack From')
        } else {

        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: parseInt(e.target.value)
        })
    }
    
    render() {
        return <form onSubmit={this.handleSubmit}>
            <label htmlFor='neighborhoodId'>Attack From:</label>
            <select value={this.state.neighborhoodId} onChange={this.handleChange} name='neighborhoodId'>
                <option value='' disabled>Select Neighborhood</option>
                {this.renderNeighborhoodOptions()}
            </select>
            <label>Number of Attacking Militias:</label>
            <select value={this.state.numMilitia} onChange={this.handleChange} name='numMilitia'>
                {this.renderMilitiaOptions()}
            </select>
            <input type='submit' value='Attack'/>
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

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Attack)