import React from 'react'
import { connect } from 'react-redux'
import { ActionCableConsumer } from 'react-actioncable-provider'
import Spinner from 'react-bootstrap/Spinner'
import Map from '../components/Map'
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
        this.props.updateGame(resp)
    }

    render() {
        return <div>
            {
                this.props.gameLoader ?
                <div className='center game-load'>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                    <h3>Loading...</h3>
                </div>

                :
                <ActionCableConsumer
                    channel={{channel: 'PlayersChannel', game: this.props.match.params.id}}
                    onReceived={this.handleReceived}
                >
                    {this.props.neighborhoodsLoader ?
                        <div className='center neighborhood-load'>
                            <Spinner animation="border" role="status" className='center game-load'>
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                            <h3>Loading...</h3>
                        </div>
                        :
                        <div className={'game-container'}>
                            <Map />
                            <ActionInfoDashboardContainer history={this.props.history}/>
                        </div>
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