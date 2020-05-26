import React from 'react'
import { connect } from 'react-redux'
import MainMenu from '../components/MainMenu'
import NewPlayerForm from '../components/NewPlayerForm'

class StartGameContainer extends React.Component {

    render() {
        return <div className='center'>
                <h1 className='main-title'>Battle For Chicago</h1>
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