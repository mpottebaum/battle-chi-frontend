import React from 'react'
import { connect } from 'react-redux'
import { placeMilitia } from '../actions/militia'

class PlaceMilitia extends React.Component {
    
    handleClick = () => {
        const { neighborhood, player } = this.props
        this.props.placeMilitia(player.id, neighborhood.id)
    }

    render() {
        return <button onClick={this.handleClick}>Place Militia</button>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        placeMilitia: (playerId, neighborhoodId) => dispatch(placeMilitia(playerId, neighborhoodId))
    }
}

export default connect(null, mapDispatchToProps)(PlaceMilitia)