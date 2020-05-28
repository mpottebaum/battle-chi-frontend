import React from 'react'
import { connect } from 'react-redux'
import Table from 'react-bootstrap/Table'

class CardSetsTable extends React.Component {

    nextBonus = () => {
        switch(this.props.game.card_sets) {
            case 0:
                return 4
            case 1:
                return 6
            case 2:
                return 8
            case 3:
                return 10
            case 4:
                return 12
            case 5:
                return 15
            default:
                return ((this.props.game.card_sets - 5) * 5) + 15
        }
    }

    getBorder = numSets => {
        if(this.props.game.card_sets === numSets) {
            return {
                border: 'solid yellow'
            }
        } else if(numSets === 6 && this.props.game.card_sets > 6) {
            return {
                border: 'solid yellow'
            }
        }
        else {
            return null
        }
    }

    calculateBonus = () => {
        if(this.props.game.card_sets > 6) {
            return 15 + ((this.props.game.card_sets - 6) * 5)
        } else {
            return 20
        }
    }

    render() {
        return <Table bordered>
            <thead>
                <tr>
                    <th>Card Set</th>
                    <th>Number of Militias</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>First</th>
                    <td style={this.getBorder(0)}>4</td>
                </tr>
                <tr>
                    <th>Second</th>
                    <td style={this.getBorder(1)}>6</td>
                </tr>
                <tr>
                    <th>Third</th>
                    <td style={this.getBorder(2)}>8</td>
                </tr>
                <tr>
                    <th>Fourth</th>
                    <td style={this.getBorder(3)}>10</td>
                </tr>
                <tr>
                    <th>Fifth</th>
                    <td style={this.getBorder(4)}>12</td>
                </tr>
                <tr>
                    <th>Sixth</th>
                    <td style={this.getBorder(5)}>15</td>
                </tr>
                <tr>
                    <th>Seventh+</th>
                    <td style={this.getBorder(6)}>{this.calculateBonus()}</td>
                </tr>
            </tbody>
        </Table>
    }
}

const mapStateToProps = state => {
    return {
        game: state.game
    }
}

export default connect(mapStateToProps)(CardSetsTable)