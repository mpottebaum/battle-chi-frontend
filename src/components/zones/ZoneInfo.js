import React from 'react'
import { connect } from 'react-redux'
import Zone from './Zone'
import { resetMap } from '../../actions/zones'
import ZonesHelp from '../help/ZonesHelp'

class ZoneInfo extends React.Component {

    renderZones = () => {
        return this.props.zones.map(zone => <Zone zone={zone} />)
    }

    render() {
        return <div className='dashboard-tab'>
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