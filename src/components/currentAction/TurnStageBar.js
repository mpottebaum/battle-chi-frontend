import React from 'react'
import { connect } from 'react-redux'
import ProgressBar from 'react-bootstrap/ProgressBar'

class TurnStageBar extends React.Component {
    
    renderPlace = () => {
        if(this.props.setup) {
            if(this.props.currentPlayer.id === this.props.turnPlayer.id) {
                return <ProgressBar now={100} variant='place' label={'Place a militia'} key={1} />
            } else {
                return <ProgressBar now={100} variant='inactive' label={'Place a militia'} key={1} />
            }
        } else if(this.props.turnStage === 0) {
            if(this.props.currentPlayer.id === this.props.turnPlayer.id) {
                return <ProgressBar now={33} variant='place' label={'Place militias'} key={1} />
            } else {
                return <ProgressBar now={33} variant='active' label={'Place militias'} key={1} />
            }
        } else {
            return <ProgressBar now={33} variant='inactive' label={'Place militias'} key={1} />
        }
    }
    
    renderAttack = () => {
        if(this.props.setup) {
            return null
        } else {
            if(this.props.turnStage === 1) {
                if(this.props.currentPlayer.id === this.props.turnPlayer.id) {
                    return <ProgressBar now={34} variant='attack' label={'Attack'} key={2} />
                } else {
                    return <ProgressBar now={34} variant='active' label={'Attack'} key={2} />
                }
            } else {
                return <ProgressBar now={34} variant='inactive' label={'Attack'} key={2} />
            }
        }
    }
    
    renderFortify = () => {
        if(this.props.setup) {
            return null
        } else {
            if(this.props.turnStage === 2) {
                if(this.props.currentPlayer.id === this.props.turnPlayer.id) {
                    return <ProgressBar now={33} variant='fortify' label={'Fortify'} key={3} />
                } else {
                    return <ProgressBar now={33} variant='active' label={'Fortify'} key={3} />
                }
            } else {
                return <ProgressBar now={33} variant='inactive' label={'Fortify'} key={3} />
            }
        }
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
        setup: state.game.setup,
        currentPlayer: state.currentPlayer
    }
}

export default connect(mapStateToProps)(TurnStageBar)