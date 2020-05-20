import React from 'react'
import { connect } from 'react-redux'
import { endTurn } from '../actions/games'

class EndTurn extends React.Component {

    handleClick = () => {
        this.props.endTurn(this.props.gameId)
    }

    render() {
        return <button onClick={this.handleClick}>End Turn</button>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        endTurn: id => dispatch(endTurn(id))
    }
}

export default connect(null, mapDispatchToProps)(EndTurn)