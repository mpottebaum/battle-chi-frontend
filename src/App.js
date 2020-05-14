import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import StartGameContainer from './containers/StartGameContainer'
import GameContainer from './containers/GameContainer'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={StartGameContainer} />
        <Route path='/game/:id' component={GameContainer} />
      </Switch>
    </Router>
  );
}

export default App;
