import React from 'react'
import { connect } from 'react-redux'
import Table from 'react-bootstrap/Table'

class GameInfo extends React.Component {

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

    render() {
        return <div className='dashboard-tab'>
            <Table>
                <thead>
                    <th>Card Sets Traded</th>
                    <th>Next Militia Bonus</th>
                </thead>
                <tbody>
                    <td>{this.props.game.card_sets}</td>
                    <td>{this.nextBonus()}</td>
                </tbody>
            </Table>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        game: state.game
    }
}

export default connect(mapStateToProps)(GameInfo)