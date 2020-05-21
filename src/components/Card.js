import React from 'react'
import { connect } from 'react-redux'
import { selectCard, unselectCard } from '../actions/cards'

class Card extends React.Component {
    renderFighterType = () => {
        switch(this.props.card.fighter_type) {
            case 1:
                return 'Gunman'
            case 2:
                return 'Tank'
            case 3:
                return 'Drone'
            case 0:
                return 'Wild Card'
        }
    }

    findNeighborhood = () => {
        return this.props.neighborhoods.find(neighborhood => {
            return neighborhood.id === this.props.card.neighborhood_id
        })
    }

    handleClick = () => {
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
                border: 'solid red'
            }
        }
    }

    render() {
        const neighborhood = this.findNeighborhood()
        return <div onClick={this.handleClick} style={this.renderStyle()}>
            <p>{this.renderFighterType()}{neighborhood ? ` | ${neighborhood.name}` : null}</p>
        </div>
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