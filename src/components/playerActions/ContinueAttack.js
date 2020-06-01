import React from 'react'
import { connect } from 'react-redux'
import { endBattle } from '../../actions/battles'
import Button from 'react-bootstrap/Button'

class ContinueAttack extends React.Component {

    handleClick = () => {
        this.props.endBattle(this.props.battle.id, this.props.playerId)
    }

    render() {
        return <Button onClick={this.handleClick} variant="outline-dark" size='lg'>Continue</Button>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        endBattle: (battleId, playerId) => dispatch(endBattle(battleId, playerId))
    }
}

export default connect(null, mapDispatchToProps)(ContinueAttack)