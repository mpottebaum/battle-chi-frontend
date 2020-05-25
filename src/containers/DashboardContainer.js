import React from 'react'
import { connect } from 'react-redux'
import NeighborhoodInfo from '../components/NeighborhoodInfo'
import Cards from '../components/Cards'
import PlayerInfo from '../components/PlayerInfo'
import ZoneInfo from '../components/ZoneInfo'
import Help from '../components/Help'
import Defend from '../components/Defend'
import Battle from '../components/Battle'
// import TabContainer from 'react-bootstrap/TabContainer'
// import TabPane from 'react-bootstrap/TabPane'
// import TabContent from 'react-bootstrap/TabContent'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Spinner from 'react-bootstrap/Spinner'
// import Tab from 'react-bootstrap/Tab'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Nav from 'react-bootstrap/Nav'

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
    
    render() {
        const battle = this.props.game.battles.find(battle => battle.id === this.props.currentBattleId)
        return <div className='dashboard'>
            {
                this.props.currentBattleId ?
                (
                    this.props.defending ?
                    (this.props.battleLoader ? 'Loading' : this.renderDefense(battle))
                    :
                    <Battle battle={battle}/>
                )
                :
                <Tabs>
                  <TabList>
                    <Tab>Neighborhoods</Tab>
                    <Tab>Cards</Tab>
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
                // <Tab.Container id="tab-container" activeKey={this.state.key} onSelect={this.handleSelect}>
                //     <Row>
                //       <Col sm={2}>
                //         <Nav variant="pills" className="flex-column">
                //           <Nav.Item>
                //             <Nav.Link eventKey={1}>Neighborhoods</Nav.Link>
                //           </Nav.Item>
                //           <Nav.Item>
                //             <Nav.Link eventKey={2}>Cards</Nav.Link>
                //           </Nav.Item>
                //           <Nav.Item>
                //             <Nav.Link eventKey={3}>Zones</Nav.Link>
                //           </Nav.Item>
                //           <Nav.Item>
                //             <Nav.Link eventKey={4}>Help</Nav.Link>
                //           </Nav.Item>
                //         </Nav>
                //       </Col>
                //       <Col sm={9}>
                //         <Tab.Content className='tab-content'>
                //           <Tab.Pane eventKey={1}>
                //             <NeighborhoodInfo />
                //           </Tab.Pane>
                //           <Tab.Pane eventKey={2}>
                //             <Cards />
                //           </Tab.Pane>
                //           <Tab.Pane eventKey={3}>
                //             <ZoneInfo />
                //           </Tab.Pane>
                //           <Tab.Pane eventKey={4}>
                //             <Help />
                //           </Tab.Pane>
                //         </Tab.Content>
                //       </Col>
                //     </Row>
                // </Tab.Container>
                
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
        currentBattleId: state.currentBattleId
    }
}

export default connect(mapStateToProps)(DashboardContainer)