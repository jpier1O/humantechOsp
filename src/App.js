import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import Movies from './pages/Movies/Movies';
import Turn from './pages/Turn/Turn';
import './App.css';

export const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/movies" exact component={Movies}/>
      <Route path="/turn" exact component={Turn}/>
    </Switch>
  </Router>
);

export default App;
