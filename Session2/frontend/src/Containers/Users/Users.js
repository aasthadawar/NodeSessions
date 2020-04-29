import React, { Component } from 'react';
import styles from './Users.module.css';
import axios from 'axios';

class Users extends Component {
  state = {
    filterArray: [],
  };

  // lifecycle method to make intial axios call to render users data initially
  componentDidMount() {
    axios
      .get(`http://localhost:9034/users`)
      .then((response) => {
        this.setState({ ...this.state, filterArray: response.data });
        console.log('response', response.data);
      })
      .catch((error) => console.log('error', error));
  }

  /* function for making axios call to get filtered result from backend 
  according to the branch name*/
  handleSearch = (event) => {
    var name = event.target.value.toLowerCase();

    axios
      .get(`http://localhost:9034/users?userid=${name}`)
      .then((response) => {
        this.setState({ ...this.state, filterArray: response.data });
        //console.log('response', response.data);
      })
      .catch((error) => console.log('error', error));
  };

  render() {
    let userData;
    let list;
    if (this.state.filterArray.length != 0) {
      // to render the filtered result of users
      userData = this.state.filterArray.map((items) => {
        return (
          <div className={styles.li} key={items.username}>
            <p>username is {items.username}</p>
            <p>firstname is {items.firstname}</p>
            <p>lastname is {items.lastname}</p>
            <p>password is {items.password}</p>
          </div>
        );
      });
      list = <ul className={styles.ul}>{userData}</ul>;
    }
    return (
      <div>
        <input
          className={styles.input}
          type='text'
          placeholder='search by username'
          onChange={() => this.handleSearch(window.event)}></input>
        {list}
      </div>
    );
  }
}

export default Users;
