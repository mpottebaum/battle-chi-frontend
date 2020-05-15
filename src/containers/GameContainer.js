import React from 'react'
import { connect } from 'react-redux'
import { ActionCableConsumer } from 'react-actioncable-provider'
import Map from '../components/Map'
import GameLog from '../components/GameLog'
import CurrentAction from '../components/CurrentAction'
import GameInfo from '../components/GameInfo'
import NeighborhoodInfo from '../components/NeighborhoodInfo'
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
        return <div>
            <ActionCableConsumer
                channel={{channel: 'PlayersChannel', game: this.props.match.params.id}}
                onReceived={this.handleReceived}
            >
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