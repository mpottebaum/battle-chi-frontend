import React from 'react'
import { SVGMap } from 'react-svg-map'
import NeighborhoodMap from '../svg/NeighborhoodMap'


class Map extends React.Component {

    handleClick = e => {
        console.log(e.target)
    }

    render() {
        return <div>
            <NeighborhoodMap handleClick={this.handleClick}/>
        </div>
    }
}

export default Map