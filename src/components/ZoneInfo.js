import React from 'react'
import { connect } from 'react-redux'
import Zone from './Zone'
import Button from 'react-bootstrap/Button'
import { resetMap } from '../actions/zones'
import ZonesHelp from './ZonesHelp'

class ZoneInfo extends React.Component {

    renderZones = () => {
        return this.props.zones.map(zone => <Zone zone={zone} />)
    }

    handleClick = () => {
        this.props.resetMap()
    }

    render() {
        return <div className='dashboard-tab'>
            <div className='center'>
                <Button
                    onClick={this.handleClick}
                    variant='outline-secondary'
                    size='lg'
                    style={{marginBottom: '10px', marginTop: '5px'}}
                    >Reset Map</Button>
            </div>
            <div className='zones'>
                {this.renderZones()}
            </div>
            <ZonesHelp />
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