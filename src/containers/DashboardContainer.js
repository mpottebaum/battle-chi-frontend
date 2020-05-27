import React from 'react'
import { connect } from 'react-redux'
import NeighborhoodInfo from '../components/NeighborhoodInfo'
import Cards from '../components/Cards'
import GameInfo from '../components/GameInfo'
import ZoneInfo from '../components/ZoneInfo'
import Help from '../components/Help'
import Defend from '../components/Defend'
import Battle from '../components/Battle'
import CardMatchNeighborhoods from '../components/CardMatchNeighborhoods'
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
      } else if(this.props.game.turn_order_num === this.props.currentPlayer.turn_order_num && this.props.matchNeighborhoodCards) {
          return <CardMatchNeighborhoods />
      }
    }
    
    render() {
        const battle = this.props.game.battles.find(battle => battle.id === this.props.currentBattleId)
        return <div className='dashboard'>
            {
                this.props.currentBattleId || this.props.matchNeighborhoodCards ?
                this.renderSpecialActions(battle)
                :
                <Tabs>
                  <TabList>
                    <Tab>Neighborhoods</Tab>
                    <Tab>Cards{this.renderCardIndicator()}</Tab>
                    <Tab>Zones</Tab>
                    <Tab>Game</Tab>
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
                    <GameInfo />
                  </TabPanel>
                  <TabPanel>
                    <Help />
                  </TabPanel>
                </Tabs>
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