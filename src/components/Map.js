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
                    return '#ffa6a6'
                case 2:
                    return '#a6c2ff'
            }
        } else {
            return '#fffac2'
        }
    }

    determineZoneStroke = name => {
        // const neighborhood = this.props.neighborhoods.find(neighborhood => neighborhood.name === name)
        // switch(neighborhood.zone.name) {
        //     case 'Far North Side':
        //         return 'red'
        //     case 'Northwest Side':
        //         return 'yellow'
        //     case 'North Side':
        //         return 'brown'
        //     case 'Central Chicago':
        //         return 'blue'
        //     case 'West Side':
        //         return 'green'
        //     case 'Southwest Side':
        //         return 'purple'
        //     case 'South Side':
        //         return 'orange'
        //     case 'Far Southwest Side':
        //         return 'turquoise'
        //     case 'Far Southeast Side':
        //         return 'gray'
        // }
        return 'white'

    }

    determineMilitiaCount = name => {
        const neighborhood = this.props.neighborhoods.find(neighborhood => neighborhood.name === name)
        const militia = this.props.game.militia.filter(militium => militium.neighborhood_id === neighborhood.id)
        return militia.length
    }

    render() {
        return <div className='map'>
            <NeighborhoodMap
                handleClick={this.handleClick}
                determineNeighborhoodFill={this.determineNeighborhoodFill}
                determineZoneStroke={this.determineZoneStroke}
                determineMilitiaCount={this.determineMilitiaCount}
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