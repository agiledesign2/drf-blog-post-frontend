import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/Homepage';
import LoginPage from './Pages/LoginPage';
import LogoutPage from './Pages/LogoutPage';
import SignupPage from './Pages/SignupPage';
import ResetPage from './Pages/ResetPage';
import ResetConfirmPage from './Pages/ResetConfirmPage';
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

        <Route path='/logout'>
          <LogoutPage/>
        </Route>

        <Route path='/signup'>
          <SignupPage/>
        </Route>

        <Route path='/reset'>
          <ResetPage/>
        </Route>

        <Route path='/confirm'>
          <ResetConfirmPage/>
        </Route>        

      </Switch>
    </Router>
  );
}

export default App;
