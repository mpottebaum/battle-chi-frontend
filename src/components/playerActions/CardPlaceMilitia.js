import React from 'react'
import { connect } from 'react-redux'
import { cardPlaceMilitia } from '../../actions/militia'
import Button from 'react-bootstrap/Button'

class CardPlaceMilitia extends React.Component {
    
    handleClick = () => {
        const { neighborhood, player } = this.props
        this.props.cardPlaceMilitia(player.id, neighborhood.id)
    }

    render() {
        return <Button variant="place" size="lg" onClick={this.handleClick}>Place Two Militias</Button>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cardPlaceMilitia: (playerId, neighborhoodId) => {
            return dispatch(cardPlaceMilitia(playerId, neighborhoodId))
        }
    }
}

export default connect(null, mapDispatchToProps)(CardPlaceMilitia)