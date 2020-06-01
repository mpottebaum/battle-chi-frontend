import React from 'react'
import { connect } from 'react-redux'
import NeighborhoodInfo from '../components/neighborhoods/NeighborhoodInfo'
import Cards from '../components/cards/Cards'
import ZoneInfo from '../components/zones/ZoneInfo'
import Help from '../components/help/Help'
import Defend from '../components/playerActions/Defend'
import Battle from '../components/playerActions/Battle'
import CardMatchNeighborhoods from '../components/cards/CardMatchNeighborhoods'
import EndGame from '../components/EndGame'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Spinner from 'react-bootstrap/Spinner'


class DashboardContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            key: 1
        }
    }

    renderDefense = battle => {
        return battle.defense_player_id === this.props.currentPlayer.id ?
          <Defend battle={battle}/>
          : 
          <div className='center'>
            <h3>Waiting for opponent to mount defense</h3>
            <Spinner animation="grow" />
          </div>
    }

    handleSelect = key => {
        this.setState({
            key: key
        })
    }

    renderCardIndicator = () => {
      if(this.props.game.turn_stage === 0) {
        const player = this.props.game.players.find(player => player.turn_order_num === this.props.game.turn_order_num)
        if(player.id === this.props.currentPlayer.id && player.cards.length >= 5) {
          return <Spinner animation="grow" size="sm" className='turn-indicator' />
        } else {
          return null
        }
      } else {
        return null
      }
    }

    renderSpecialActions = battle => {
      if(this.props.currentBattleId) {
          return this.props.defending ?
          (this.props.battleLoader ? 'Loading' : this.renderDefense(battle))
          :
          <Battle battle={battle}/>
      } else if(this.props.game.turn_order_num === this.props.currentPlayer.turn_order_num && this.props.matchNeighborhoodCards.length > 0) {
          return <CardMatchNeighborhoods />
      }
    }

    renderGameDash = () => {
      const battle = this.props.game.battles.find(battle => battle.id === this.props.currentBattleId)
      return this.props.currentBattleId || (this.props.matchNeighborhoodCards.length > 0 && this.props.currentPlayer.turn_order_num === this.props.game.turn_order_num) ?
              this.renderSpecialActions(battle)
              :
              <Tabs>
                <TabList>
                  <Tab>Neighborhoods</Tab>
                  <Tab>Cards{this.renderCardIndicator()}</Tab>
                  <Tab>Zones</Tab>
                  <Tab>Help</Tab>
                </TabList>

                <TabPanel>
                  <NeighborhoodInfo />
                </TabPanel>
                <TabPanel>
                  <Cards />
                </TabPanel>
                <TabPanel>
                  <ZoneInfo />
                </TabPanel>
                <TabPanel>
                  <Help />
                </TabPanel>
              </Tabs>
    }
    
    render() {
        const battle = this.props.game.battles.find(battle => battle.id === this.props.currentBattleId)
        return <div className='dashboard'>
            {
                this.props.game.completed ?
                <EndGame />
                :
                this.renderGameDash()
            }
        </div>
    }
}

const mapStateToProps = state => {
    return {
        game: state.game,
        currentPlayer: state.currentPlayer,
        defending: state.defending,
        battleLoader: state.battleLoader,
        currentBattleId: state.currentBattleId,
        matchNeighborhoodCards: state.matchNeighborhoodCards
    }
}

export default connect(mapStateToProps)(DashboardContainer)