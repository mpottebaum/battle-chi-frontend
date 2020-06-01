import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import CardsHelp from '../help/CardsHelp'
import { tradeCards } from '../../actions/cards'
import Button from 'react-bootstrap/Button'

class Cards extends React.Component {

    findPlayer = () => {
        return this.props.game.players.find(player => player.id === this.props.currentPlayer.id)
    }

    enableButton = () => {
        const player = this.findPlayer()
        const selectedCards = player.cards.filter(card => this.props.selectedCards.includes(card.id))
        if(selectedCards.every(card => card.fighter_type === selectedCards[0].fighter_type)) {
            console.log('same')
            return true
        } else if(this.oneOfEach(selectedCards)) {
            console.log('one of each')
            return true
        } else if(this.wildCard(selectedCards)) {
            console.log('wild')
            return true
        } else {
            return false
        }
    }

    oneOfEach = selectedCards => {
        const lib = {}
        let oneOfEach = true
        selectedCards.forEach(card => {
            if(lib[card.fighter_type]) {
                oneOfEach = false
            } else {
                lib[card.fighter_type] = 1
            }
        })
        return oneOfEach
    }

    wildCard = selectedCards => {
        const wildCards = selectedCards.filter(card => card.fighter_type === 0)
        return wildCards.length > 0
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
        if(this.isCurrentPlayersTurn() && this.isPlaceMilitia()) {
            if(this.props.selectedCards.length === 3 && this.enableButton()) {
                return <Button onClick={this.handleClick} size='lg' className='trade-btn'>Trade In Set</Button>
            } else {
                return <Button disabled size='lg' className='trade-btn'>Trade In Set</Button>
            }
        } else {
            return null
        }
    }

    renderCards = player => {
        return player.cards.map(card => <Card card={card}/>)
    }

    render() {
        const player = this.findPlayer()
        return <div className='dashboard-tab'>
            {
                player.cards.length > 0 ?
                <div className='center'>
                    <h2>Your Cards</h2>
                    <div className='cards your-cards'>
                        {this.renderCards(player)}
                    </div>
                    <div className='card-actions'>
                        <p>Click on a card to select it</p>
                        {this.props.game.setup ? null : this.renderTradeButton()}
                    </div>
                </div>
                :
                <div className='center'>
                    <h2>You do not have any cards</h2>
                </div>
            }
            <CardsHelp />
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