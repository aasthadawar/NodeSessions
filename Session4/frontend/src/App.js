import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Container/Login/Login';
import Header from './Components/header/header';
import Dashboard from './Container/Dashboard/DashBoard';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/login' component={Login}></Route>
        <Redirect to="/login"/>
      </Switch>
    </div>
  );
}

export default App;
