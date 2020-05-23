import React from 'react'
import { connect } from 'react-redux'
import { endTurn } from '../actions/games'
import Button from 'react-bootstrap/Button'

class EndTurn extends React.Component {

    handleClick = () => {
        this.props.endTurn(this.props.gameId)
    }

    render() {
        return <Button size="lg" variant="outline-primary" onClick={this.handleClick}>End Turn</Button>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        endTurn: id => dispatch(endTurn(id))
    }
}

export default connect(null, mapDispatchToProps)(EndTurn)