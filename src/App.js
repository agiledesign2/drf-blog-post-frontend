import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/Homepage';
import LoginPage from './Pages/LoginPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>

        <Route path='/login'>
          <LoginPage/>
        </Route>        

      </Switch>
    </Router>
  );
}

export default App;
