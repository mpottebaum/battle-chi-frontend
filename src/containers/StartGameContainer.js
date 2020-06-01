import React from 'react'
import { connect } from 'react-redux'
import MainMenu from '../components/startGame/MainMenu'
import NewPlayerForm from '../components/startGame/NewPlayerForm'

class StartGameContainer extends React.Component {

    render() {
        return <div className='center'>
                <div className='main-title'>
                    <h1 >Battle For Chicago</h1>
                    <h3>A strategic war game based on the board game Risk</h3>
                </div>
                <div className='menu-container'>
                    {this.props.game ? <NewPlayerForm history={this.props.history} /> : <MainMenu history={this.props.history}/>}
                </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        game: state.game
    }
}

export default connect(mapStateToProps)(StartGameContainer)