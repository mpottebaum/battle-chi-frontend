import React from 'react'
import { connect } from 'react-redux'
import { placeMilitia } from '../actions/militia'
import Button from 'react-bootstrap/Button'

class PlaceMilitia extends React.Component {
    
    handleClick = () => {
        const { neighborhood, player } = this.props
        this.props.placeMilitia(player.id, neighborhood.id)
    }

    render() {
        return <Button variant="primary" size="lg" onClick={this.handleClick}>Place Militia</Button>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        placeMilitia: (playerId, neighborhoodId) => {
            return dispatch(placeMilitia(playerId, neighborhoodId))
        }
    }
}

export default connect(null, mapDispatchToProps)(PlaceMilitia)