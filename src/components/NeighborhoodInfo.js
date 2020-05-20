import React from 'react'
import { connect } from 'react-redux'
import Neighborhood from './Neighborhood'

class NeighborhoodInfo extends React.Component {

    findNeighborhoods = () => {
        return this.props.neighborhoods.filter(neighborhood => {
            return this.props.selectedNeighborhoods.includes(neighborhood.name)
        })
    }

    renderNeighborhoods = () => {
        const neighborhoods = this.findNeighborhoods()
        return neighborhoods.map(neighborhood => {
            return <Neighborhood key={neighborhood.id} neighborhood={neighborhood} />
        })
    }

    render() {
        return <div>
            <h3>Neighborhoods</h3>
            <div className='neighborhood-info'>
                {this.renderNeighborhoods()}
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        selectedNeighborhoods: state.selectedNeighborhoods,
        neighborhoods: state.neighborhoods
    }
}

export default connect(mapStateToProps)(NeighborhoodInfo)