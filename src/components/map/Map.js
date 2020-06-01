import React from 'react'
import { connect } from 'react-redux'
import NeighborhoodMap from '../../svg/NeighborhoodMap'
import { selectNeighborhood } from '../../actions/neighborhoods'


class Map extends React.Component {

    handleClick = e => {
        const name = e.target.dataset.name
        if(name && !this.props.selectedNeighborhoods.includes(name)) {
            this.props.selectNeighborhood(name)
        }
    }

    determineNeighborhoodFill = name => {
        const neighborhood = this.props.neighborhoods.find(neighborhood => neighborhood.name === name)
        const militium = this.props.game.militia.find(militium => militium.neighborhood_id === neighborhood.id)
        if(this.props.showZoneId && neighborhood.zone.id === this.props.showZoneId) {
            return '#8fffe1'
        } else if(militium) {
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
        game: state.game,
        showZoneId: state.showZoneId,
        selectedNeighborhoods: state.selectedNeighborhoods
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectNeighborhood: name => dispatch(selectNeighborhood(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)