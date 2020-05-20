import React from 'react'
import { connect } from 'react-redux'
import ProgressBar from 'react-bootstrap/ProgressBar'

class TurnStageBar extends React.Component {
    
    renderPlace = () => {
        if(this.props.setup) {
            return <ProgressBar now={100} label={'Place a militia'} key={1} />
        } else if(this.props.turnStage === 0) {
            return <ProgressBar now={33} label={'Place militias'} key={1} />
        } else {
            return <ProgressBar now={33} variant='place' key={1} />
        }
    }
    
    renderAttack = () => {
        if(this.props.turnStage === 1) {
            return <ProgressBar now={34} label={'Attack'} key={2} />
        } else if(this.props.turnStage === 2) {
            return <ProgressBar now={34} variant='attack' key={2} />
        } else {
            return null
        }
    }
    
    renderFortify = () => {
        return this.props.turnStage === 2 ?
            <ProgressBar now={33} label={'Fortify'} key={2} />
            :
            null
    }
    
    render() {
        return <ProgressBar>
            {this.renderPlace()}
            {this.renderAttack()}
            {this.renderFortify()}
        </ProgressBar>
    }
}

const mapStateToProps = state => {
    return {
        turnStage: state.game.turn_stage,
        setup: state.game.setup
    }
}

export default connect(mapStateToProps)(TurnStageBar)