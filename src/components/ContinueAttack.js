import React from 'react'
import { connect } from 'react-redux'
import { endBattle } from '../actions/battles'

class ContinueAttack extends React.Component {

    handleClick = () => {
        this.props.endBattle(this.props.battle.id, this.props.playerId)
    }

    render() {
        return <button onClick={this.handleClick}>Continue</button>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        endBattle: (battleId, playerId) => dispatch(endBattle(battleId, playerId))
    }
}

export default connect(null, mapDispatchToProps)(ContinueAttack)