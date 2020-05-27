import React from 'react'
import { connect } from 'react-redux'
import Neighborhood from './Neighborhood'

class CardMatchNeighborhoods extends React.Component {
    renderNeighborhoods = () => {
        return this.props.game.match_neighborhood_cards.map(card => {
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
        neighborhoods: state.neighborhoods
    }
}

export default connect(mapStateToProps)(CardMatchNeighborhoods)