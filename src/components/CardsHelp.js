import React from 'react'
import Card from './Card'
import Table from 'react-bootstrap/Table'
import CardSetsTable from './CardSetsTable'

const CardsHelp = () => {
    return <div>
        <h2>About Cards</h2>
        <p>You receive one card at the end of your turn if you have conquered one or more of your opponent's neighborhoods. Sets of 3 cards can be traded in at the beginning of your turn for additional militias. If you have 5 or more cards, you will be forced to trade in sets until you have less than 5 cards.</p>
        <h2>Example Sets</h2>
        <h4>Three of the same image</h4>
        <div className='cards'>

            <Card card={{id: 0, neighborhood_id: 192, fighter_type: 2}}/>
            <Card card={{id: 0, neighborhood_id: 205, fighter_type: 2}}/>
            <Card card={{id: 0, neighborhood_id: 169, fighter_type: 2}}/>
        </div>
        <h4>Three of each image</h4>
        <div className='cards'>
            <Card card={{id: 0, neighborhood_id: 191, fighter_type: 3}}/>
            <Card card={{id: 0, neighborhood_id: 205, fighter_type: 2}}/>
            <Card card={{id: 0, neighborhood_id: 187, fighter_type: 1}}/>
        </div>
        <h4>Two different images plus one Wild Card</h4>
        <div className='cards'>
            <Card card={{id: 0, neighborhood_id: 191, fighter_type: 3}}/>
            <Card card={{id: 0, neighborhood_id: 187, fighter_type: 1}}/>
            <Card card={{id: 0, neighborhood_id: null, fighter_type: 0}}/>
        </div>
        <h2>Militia bonuses</h2>
        <CardSetsTable />
        <p>Each time any player trades in a set of cards, the number of militias received for all players increases as shown in the table below.</p>
        <p>After the sixth set, the number of militias received increases by 5.</p>
        <Table bordered>
            <thead>
                <tr>
                    <th></th>
                    <th>Number of Militias</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>First Set</th>
                    <td>4</td>
                </tr>
                <tr>
                    <th>Second Set</th>
                    <td>6</td>
                </tr>
                <tr>
                    <th>Third Set</th>
                    <td>8</td>
                </tr>
                <tr>
                    <th>Fourth Set</th>
                    <td>10</td>
                </tr>
                <tr>
                    <th>Fifth Set</th>
                    <td>12</td>
                </tr>
                <tr>
                    <th>Sixth Set</th>
                    <td>15</td>
                </tr>
            </tbody>
        </Table>
    </div>
}

export default CardsHelp