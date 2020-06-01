import React from 'react'
import { connect } from 'react-redux'
import { selectCard, unselectCard } from '../../actions/cards'
import {default as BootCard} from 'react-bootstrap/Card'

class Card extends React.Component {
    renderImg = () => {
        switch(this.props.card.fighter_type) {
            case 1:
                return '/card_images/jordan.jpg'
            case 2:
                return '/card_images/oprah.jpg'
            case 3:
                return '/card_images/billycorgan.png'
            case 0:
                return '/card_images/kanye.jpg'
        }
    }

    findNeighborhood = () => {
        return this.props.neighborhoods.find(neighborhood => {
            return neighborhood.id === this.props.card.neighborhood_id
        })
    }

    handleClick = () => {
        if(this.props.card.id === 0) {
            return
        }
        if(this.props.selectedCards.includes(this.props.card.id)) {
            this.props.unselectCard(this.props.card.id)
        } else {
            if(this.props.selectedCards.length < 3) {
                this.props.selectCard(this.props.card.id)
            }
        }
    }

    renderStyle = () => {
        if(this.props.selectedCards.includes(this.props.card.id)) {
            return {
                border: 'solid #ff6161'
            }
        }
    }

    render() {
        const neighborhood = this.findNeighborhood()
        return <BootCard onClick={this.handleClick} style={this.renderStyle()} className='center hand-card'>
                <BootCard.Img variant='top' src={this.renderImg()} className='card-img'/>
                <h3 className='card-neighborhood'>{neighborhood ? neighborhood.name : 'Wild Card'}</h3>
            </BootCard>
    }
}

const mapStateToProps = state => {
    return {
        neighborhoods: state.neighborhoods,
        selectedCards: state.selectedCards
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectCard: id => dispatch(selectCard(id)),
        unselectCard: id => dispatch(unselectCard(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)