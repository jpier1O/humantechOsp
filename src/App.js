import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import './App.css';

export const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={HomePage}/>      
    </Switch>
  </Router>
);

export default App;
