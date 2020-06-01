import React from 'react'
import Card from '../cards/Card'
import CardSetsTable from '../cards/CardSetsTable'

const CardsHelp = () => {
    return <div className='tab-help'>
        <h2 className='help-header'>About Cards</h2>
        <p className='help-pg'>You receive one card at the end of your turn if you have conquered one or more of your opponent's neighborhoods. Sets of 3 cards can be traded in at the beginning of your turn for additional militias. If you have 5 or more cards, you will be forced to trade in sets until you have less than 5 cards.</p>
        <h2 className='help-header'>Example Sets</h2>
        <div className='card-example'>
            <h4 className='help-subhead'>Three of the same image</h4>
            <div className='cards'>

                <Card card={{id: 0, neighborhood_id: 192, fighter_type: 2}}/>
                <Card card={{id: 0, neighborhood_id: 205, fighter_type: 2}}/>
                <Card card={{id: 0, neighborhood_id: 169, fighter_type: 2}}/>
            </div>
        </div>
        <div className='card-example'>
            <h4 className='help-subhead'>Three of each image</h4>
            <div className='cards'>
                <Card card={{id: 0, neighborhood_id: 191, fighter_type: 3}}/>
                <Card card={{id: 0, neighborhood_id: 205, fighter_type: 2}}/>
                <Card card={{id: 0, neighborhood_id: 187, fighter_type: 1}}/>
            </div>
        </div>
        <div className='card-example'>
            <h4 className='help-subhead'>Two different images plus one Wild Card</h4>
            <div className='cards'>
                <Card card={{id: 0, neighborhood_id: 191, fighter_type: 3}}/>
                <Card card={{id: 0, neighborhood_id: 187, fighter_type: 1}}/>
                <Card card={{id: 0, neighborhood_id: null, fighter_type: 0}}/>
            </div>
        </div>
        <h2 className='help-header'>Militia bonuses</h2>
        <p className='help-pg'>Each time any player trades in a set of cards, the number of militias received for all players increases as shown in the table below.</p>
        <p className='help-pg'>After the sixth set, the number of militias received increases by 5.</p>
        <p className='help-pg'>The next militia bonus in your current game is highlighted below.</p>
        <CardSetsTable />
    </div>
}

export default CardsHelp