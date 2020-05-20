import React from 'react'
import { connect } from 'react-redux'
import NeighborhoodMap from '../svg/NeighborhoodMap'
import { selectNeighborhood } from '../actions/neighborhoods'


class Map extends React.Component {

    handleClick = e => {
        if(e.target.dataset.name) {
            this.props.selectNeighborhood(e.target.dataset.name)
        }
    }

    determineNeighborhoodFill = name => {
        const neighborhood = this.props.neighborhoods.find(neighborhood => neighborhood.name === name)
        const militium = this.props.game.militia.find(militium => militium.neighborhood_id === neighborhood.id)
        if(militium) {
            const player = this.props.game.players.find(player => player.id === militium.player_id)
            switch(player.turn_order_num) {
                case 1:
                    return 'red'
                case 2:
                    return 'blue'
            }
        } else {
            return 'white'
        }
    }

    render() {
        return <div className='map'>
            <NeighborhoodMap
                handleClick={this.handleClick}
                determineNeighborhoodFill={this.determineNeighborhoodFill}
            />
        </div>
    }
}

const mapStateToProps = state => {
    return {
        neighborhoods: state.neighborhoods,
        game: state.game
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectNeighborhood: name => dispatch(selectNeighborhood(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)