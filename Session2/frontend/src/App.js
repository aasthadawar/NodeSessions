import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Containers/Header/Header';
import Users from './Containers/Users/Users';
import Students from './Containers/Students/Students';
import Main from './Components/Main/Main';

class App extends Component {
  render() {
    return (
      <div>
        <Main />
        <Switch>
          <Route path='/header' component={Header}></Route>
          <Route path='/users' component={Users}></Route>
          <Route path='/students' component={Students}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
