import React from 'react'
import { connect } from 'react-redux'
import Zone from './Zone'
import Button from 'react-bootstrap/Button'
import { resetMap } from '../actions/zones'

class ZoneInfo extends React.Component {

    renderZones = () => {
        return this.props.zones.map(zone => <Zone zone={zone} />)
    }

    handleClick = () => {
        this.props.resetMap()
    }

    render() {
        return <div className='dashboard-tab center'>
            <Button onClick={this.handleClick} variant='outline-secondary'>Reset Map</Button>
            <div className='zones'>
                {this.renderZones()}
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        zones: state.zones,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetMap: () => dispatch(resetMap())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ZoneInfo)