import React from 'react'
import { connect } from 'react-redux'
import NeighborhoodMap from '../svg/NeighborhoodMap'
import { selectNeighborhood } from '../actions/neighborhoods'


class Map extends React.Component {

    handleClick = e => {
        this.props.selectNeighborhood(e.target.dataset.name)
    }

    render() {
        return <div>
            <NeighborhoodMap handleClick={this.handleClick}/>
        </div>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectNeighborhood: name => dispatch(selectNeighborhood(name))
    }
}

export default connect(null, mapDispatchToProps)(Map)