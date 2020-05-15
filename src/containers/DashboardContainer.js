import React from 'react'
import { connect } from 'react-redux'
import Map from '../components/Map'
import GameLog from '../components/GameLog'
import CurrentAction from '../components/CurrentAction'
import GameInfo from '../components/GameInfo'
import NeighborhoodInfo from '../components/NeighborhoodInfo'
import { addNeighborhoods } from '../actions/neighborhoods'

class DashboardContainer extends React.Component {

    componentDidMount() {
        this.props.addNeighborhoods()
    }

    render() {
        return <div>
            {this.props.neighborhoodsLoader ?
                'Loading...'
                :
                <React.Fragment>
                    <Map />
                    <GameLog />
                    <CurrentAction />
                    <GameInfo />
                    <NeighborhoodInfo />
                </React.Fragment>
            }
        </div>
    }
}

const mapStateToProps = state => {
    return {
        neighborhoodsLoader: state.neighborhoodsLoader
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNeighborhoods: () => dispatch(addNeighborhoods())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)