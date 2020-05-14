import React from 'react'
import { connect } from 'react-redux'
import MainMenu from '../components/MainMenu'
import NewPlayerForm from '../components/NewPlayerForm'

class StartGameContainer extends React.Component {

    render() {
        return <div>
                <h1>Battle For Chicago</h1>
                {this.props.game ? <NewPlayerForm history={this.props.history} /> : <MainMenu />}
        </div>
    }
}

const mapStateToProps = state => {
    return {
        game: state.game
    }
}

export default connect(mapStateToProps)(StartGameContainer)