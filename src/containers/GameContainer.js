import React from 'react'
import { connect } from 'react-redux'
import { ActionCableConsumer } from 'react-actioncable-provider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MapGameLogContainer from './MapGameLogContainer'
import ActionInfoDashboardContainer from './ActionInfoDashboardContainer'
import { addNeighborhoods } from '../actions/neighborhoods'
import { updateGame } from '../actions/games'


class GameContainer extends React.Component {

    componentDidMount() {
        this.props.addNeighborhoods()
    }

    handleReceived = resp => {
        this.props.updateGame(resp.game)
    }

    render() {
        return <div className={'game-container'}>
            <ActionCableConsumer
                channel={{channel: 'PlayersChannel', game: this.props.match.params.id}}
                onReceived={this.handleReceived}
            >
                {this.props.neighborhoodsLoader ?
                    'Loading...'
                    :
                    <React.Fragment>
                        <MapGameLogContainer />
                        <ActionInfoDashboardContainer />
                    </React.Fragment>
                }
            </ActionCableConsumer>
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
        addNeighborhoods: () => dispatch(addNeighborhoods()),
        updateGame: game => dispatch(updateGame(game))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)