import React from 'react'
import { connect } from 'react-redux'
import Neighborhood from '../neighborhoods/Neighborhood'

class CardMatchNeighborhoods extends React.Component {
    renderNeighborhoods = () => {
        return this.props.matchNeighborhoodCards.map(card => {
            const neighborhood = this.props.neighborhoods.find(neighborhood => card.neighborhood_id === neighborhood.id)
            return <Neighborhood key={neighborhood.id} neighborhood={neighborhood}/>
        })
    }

    render() {
        return <div className='neighborhood-info'>
            {this.renderNeighborhoods()}
        </div>
    }
}

const mapStateToProps = state => {
    return {
        game: state.game,
        neighborhoods: state.neighborhoods,
        matchNeighborhoodCards: state.matchNeighborhoodCards
    }
}

export default connect(mapStateToProps)(CardMatchNeighborhoods)