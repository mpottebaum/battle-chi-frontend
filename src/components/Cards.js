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
        } else if(this.oneOfEach()) {
            return false
        } else if(this.twoPlusWildCard()) {
            return false
        } else {
            return true
        }
    }

    oneOfEach = selectedCards => {
        const lib = {}
        let isOneOfEach = false
        selectedCards.forEach(card => {
            if(lib[card.fighter_type]) {
                isOneOfEach = true
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
        this.props.tradeCards(this.props.selectedCards)
    }

    render() {
        return <div>
            <h3>Cards</h3>
            <ul>
                {this.renderCards()}
            </ul>
            <button
                disabled={this.props.selectedCards.length === 3 ? this.disableButton() : true}
                onClick={this.handleClick}
            >Trade In Set</button>
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
        tradeCards: cardIds => dispatch(tradeCards(cardIds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)