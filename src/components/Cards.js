import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import { tradeCards } from '../actions/cards'

class Cards extends React.Component {

    findPlayer = () => {
        return this.props.game.players.find(player => player.id === this.props.currentPlayer.id)
    }

    renderCards = () => {
        const player = this.findPlayer()
        return player.cards.map(card => <Card card={card}/>)
    }

    disableButton = () => {
        const player = this.findPlayer()
        const selectedCards = player.cards.filter(card => this.props.selectedCards.includes(card.id))
        if(selectedCards.every(card => card.fighter_type === selectedCards[0].fighter_type)) {
            return false
        } else if(this.oneOfEach(selectedCards)) {
            return false
        } else if(this.twoPlusWildCard(selectedCards)) {
            return false
        } else {
            return true
        }
    }

    oneOfEach = selectedCards => {
        const lib = {}
        let isOneOfEach = true
        selectedCards.forEach(card => {
            if(lib[card.fighter_type]) {
                isOneOfEach = false
            } else {
                lib[card.fighter_type] = 1
            }
        })
        return isOneOfEach
    }

    twoPlusWildCard = selectedCards => {
        const wildCards = selectedCards.filter(card => card.fighter_type === 0)
        const remainingCards = selectedCards.filter(card => card.fighter_type !== 0)
        switch(wildCards.length) {
            case 2:
                return true
            case 1:
                if(remainingCards[0].fighter_type === remainingCards[1].fighter_type) {
                    return false
                } else {
                    return true
                }
            case 0:
                return false
        }
    }

    handleClick = () => {
        this.props.tradeCards(this.props.selectedCards, this.props.currentPlayer.id)
    }

    isCurrentPlayersTurn = () => {
        return this.props.game.turn_order_num === this.props.currentPlayer.turn_order_num
    }

    isPlaceMilitia = () => {
        return this.props.game.turn_stage === 0
    }

    renderTradeButton = () => {
        return this.isCurrentPlayersTurn() && this.isPlaceMilitia() ?
            <button
                disabled={this.props.selectedCards.length === 3 ? this.disableButton() : true}
                onClick={this.handleClick}
            >Trade In Set</button>
            :
            null
    }

    render() {
        return <div>
            <h3>Cards</h3>
            <ul>
                {this.renderCards()}
            </ul>
            {this.props.game.setup ? null : this.renderTradeButton()}
        </div>
    }
}

const mapStateToProps = state => {
    return {
        currentPlayer: state.currentPlayer,
        game: state.game,
        selectedCards: state.selectedCards
    }
}

const mapDispatchToProps = dispatch => {
    return {
        tradeCards: (cardIds, playerId) => dispatch(tradeCards(cardIds, playerId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)