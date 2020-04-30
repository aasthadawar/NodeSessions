import React from 'react';
import './App.css';
import Home from './Containers/Home/Home';
import AddUser from './Containers/User/AddUser';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Components/Header/Header';
import About from './Containers/About/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <Redirect to="/home"/>
      <Switch>
      <Route path="/home" component={Home}></Route>
        <Route path="/adduser" component={AddUser}></Route>
        <Route path="/about" component={About}></Route>
      </Switch>
    </div>
  );
}

export default App;
