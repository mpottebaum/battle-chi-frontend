import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainMenu from './components/MainMenu'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={MainMenu} />
        {/* <Route path='/game/:id' component={} /> */}
      </Switch>
    </Router>
  );
}

export default App;
