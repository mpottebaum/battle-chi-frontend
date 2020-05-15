import React from 'react'
import { connect } from 'react-redux'
import Neighborhood from './Neighborhood'

class NeighborhoodInfo extends React.Component {
    renderNeighborhoods = () => {
        return this.props.selectedNeighborhoods.map(neighborhood => {
            return <Neighborhood neighborhood={neighborhood} />
        })
    }

    render() {
        return <div>
            <ul>
                {this.renderNeighborhoods()}
            </ul>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        selectedNeighborhoods: state.selectedNeighborhoods
    }
}

export default connect(mapStateToProps)(NeighborhoodInfo)