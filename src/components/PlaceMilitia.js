import React from 'react'
import { connect } from 'react-redux'
import { placeMilitia } from '../actions/militia'
import Button from 'react-bootstrap/Button'

class PlaceMilitia extends React.Component {
    
    handleClick = () => {
        const { neighborhood, player } = this.props
        let endStage
        if((this.props.placeMilitiaCount - this.props.militiaPlaced) === 1) {
            endStage = true
        } else {
            endStage = false
        }
        this.props.placeMilitia(player.id, neighborhood.id, endStage)
    }

    render() {
        return <Button variant="primary" size="lg" onClick={this.handleClick}>Place Militia</Button>
    }
}

const mapStateToProps = state => {
    return {
        placeMilitiaCount: state.placeMilitiaCount,
        militiaPlaced: state.militiaPlaced
    }
}

const mapDispatchToProps = dispatch => {
    return {
        placeMilitia: (playerId, neighborhoodId, endStage) => {
            return dispatch(placeMilitia(playerId, neighborhoodId, endStage))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceMilitia)