import React from 'react'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { clearGame } from '../actions/games'

class ExitGame extends React.Component {

    handleClick = () => {
        this.props.clearGame()
        this.props.history.push('/')
    }

    render() {
        return <Button
                onClick={this.handleClick}
                variant='outline-secondary'
                size='lg'
                style={{marginBottom: '10px', marginTop: '5px', marginRight: '5px'}}
                >Exit Game</Button>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearGame: () => dispatch(clearGame())
    }
}

export default connect(null, mapDispatchToProps)(ExitGame)