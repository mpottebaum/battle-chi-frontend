import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import StartGameContainer from './containers/StartGameContainer'
import LobbyContainer from './containers/LobbyContainer'
import GameContainer from './containers/GameContainer'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={StartGameContainer} />
        <Route path='/lobby/:id' component={LobbyContainer} />
        <Route path='/game/:id' component={GameContainer} />
      </Switch>
    </Router>
  );
}

export default App;
