import React from 'react'
import { connect } from 'react-redux'
import { ActionCableConsumer } from 'react-actioncable-provider'
import MapGameLogContainer from './MapGameLogContainer'
import ActionInfoDashboardContainer from './ActionInfoDashboardContainer'
import { addNeighborhoods } from '../actions/neighborhoods'
import { updateGame, addGameAndNeighborhoods } from '../actions/games'
import '../Game.css'


class GameContainer extends React.Component {

    componentDidMount() {
        if(this.props.gameLoader) {
            const gameId = localStorage.getItem('gameId')
            const playerId = localStorage.getItem('playerId')
            this.props.addGameAndNeighborhoods(gameId, playerId)
        } else {
            this.props.addNeighborhoods()
        }
    }

    handleReceived = resp => {
        this.props.updateGame(resp.game)
    }

    render() {
        return <div className={'game-container'}>
            {
                this.props.gameLoader ?
                'Loading'
                :
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
            }
        </div>
    }
}

const mapStateToProps = state => {
    return {
        neighborhoodsLoader: state.neighborhoodsLoader,
        gameLoader: state.gameLoader
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNeighborhoods: () => dispatch(addNeighborhoods()),
        updateGame: game => dispatch(updateGame(game)),
        addGameAndNeighborhoods: (gameId, playerId) =>  dispatch(addGameAndNeighborhoods(gameId, playerId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)