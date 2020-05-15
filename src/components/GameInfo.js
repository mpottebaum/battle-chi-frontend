import React from 'react'
import { connect } from 'react-redux'

class GameInfo extends React.Component {
    translateTurnStage = () => {
        switch(this.props.game.turn_stage) {
            case 0:
                return 'Place Militias'
            case 1:
                return 'Attack'
            case 2:
                return 'Fortify'
        }
    }

    findPlayer = () => {
        return this.props.game.players.find(player => {
            return player.order_num === this.props.game.order_num
        })
    }
    
    render() {
        const player = this.findPlayer()
        return <div>
            <h3>Turn</h3>
            <p>Number: {this.props.game.turn_num}</p>
            <p>Player: {player.name}</p>
            <p>Stage: {this.translateTurnStage()}</p>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        game: state.game
    }
}

export default connect(mapStateToProps)(GameInfo)