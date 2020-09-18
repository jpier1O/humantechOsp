import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import Movies from './pages/Movies/Movies';
import Turn from './pages/Turn/Turn';
import NewTurn from './pages/Turn/NewTurn/NewTurn';
import Drawer from './components/Shared/Drawer/Drawer';
import './App.css';

export const App = () => (
  <Router>
    <Drawer />
    <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/movies" exact component={Movies}/>
      <Route path="/turn" exact component={Turn}/>
      <Route path="/newturn" exact component={NewTurn}/>
    </Switch>
  </Router>
);

export default App;
