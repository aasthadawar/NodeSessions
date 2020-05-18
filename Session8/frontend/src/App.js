import React from 'react';
import {Route,Switch, Redirect} from 'react-router-dom';
import Register from './Containers/Register/Register';
import Login from './Containers/Login/Login';
import Dashboard from './Containers/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Switch>
      <Route path="/register" component={Register}></Route>
      <Route path="/home" component={Login}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
      <Redirect to="/home"/>
    </Switch>
    </div>
  );
}

export default App;
