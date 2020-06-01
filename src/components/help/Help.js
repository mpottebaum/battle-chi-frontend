import React from 'react'
import { connect } from 'react-redux'
import PlaceHelp from './PlaceHelp'
import AttackHelp from './AttackHelp'
import FortifyHelp from './FortifyHelp'
import SetupHelp from './SetupHelp'

class Help extends React.Component {

    renderHelp = () => {
        if(this.props.game.setup) {
            return <SetupHelp />
        } else {
            switch(this.props.game.turn_stage) {
                case 0:
                    return <PlaceHelp />
                case 1:
                    return <AttackHelp />
                case 2:
                    return <FortifyHelp />
            }
        }
    }

    render() {
        return <div className='dashboard-tab'>
            {this.renderHelp()}
        </div>
    }
}

const mapStateToProps = state => {
    return {
        game: state.game
    }
}

export default connect(mapStateToProps)(Help)