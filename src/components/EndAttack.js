import React from 'react'
import { connect } from 'react-redux'
import { endAttack } from '../actions/games'

class EndAttack extends React.Component {
    
    handleClick = () => {
        this.props.endAttack(this.props.gameId)
    }

    render() {
        return this.props.currentBattleId ?
            null
            :
            <button onClick={this.handleClick}>End Attack</button>     
    }
}

const mapStateToProps = state => {
    return {
        currentBattleId: state.currentBattleId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        endAttack: id => dispatch(endAttack(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EndAttack)