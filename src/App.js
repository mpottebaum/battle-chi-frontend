import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import StartGameContainer from './containers/StartGameContainer'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={StartGameContainer} />
        {/* <Route path='/game/:id' component={} /> */}
      </Switch>
    </Router>
  );
}

export default App;
