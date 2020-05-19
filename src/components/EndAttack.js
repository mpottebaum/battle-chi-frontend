import React from 'react'
import { connect } from 'react-redux'
import { endAttack } from '../actions/games'

class EndAttack extends React.Component {
    
    handleClick = () => {
        this.props.endAttack(this.props.gameId)
    }

    render() {
        return <button onClick={this.handleClick}>End Attack</button>
    }
}



const mapDispatchToProps = dispatch => {
    return {
        endAttack: id => dispatch(endAttack(id))
    }
}

export default connect(null, mapDispatchToProps)(EndAttack)