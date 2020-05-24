import React from 'react'
import { connect } from 'react-redux'
import Zone from './Zone'

class ZoneInfo extends React.Component {

    renderZones = () => {
        return this.props.zones.map(zone => <Zone zone={zone} />)
    }

    render() {
        return <div className='dashboard-tab zones'>
            {this.renderZones()}
        </div>
    }
}

const mapStateToProps = state => {
    return {
        zones: state.zones,
    }
}

export default connect(mapStateToProps)(ZoneInfo)