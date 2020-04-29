import React, { Component } from 'react';
import axios from 'axios';
import styles from '../Header/Header.module.css';

class Header extends Component {
  // function to handle request for the links
  handlePage = (event) => {
    let pathParam = event.target.id;
    axios.get(`http://localhost:9034/header?page=${pathParam}`)
      .then((response) => {
        document.getElementById('head').innerHTML = response.data;
      });
  };
  render() {
    return (
      <div className={styles.button}>
        <button
          className={styles.ButtonItem}
          id='home'
          onClick={() => {
            this.handlePage(window.event);
          }}>
          Home
        </button>
        <button
          className={styles.ButtonItem}
          id='about'
          onClick={() => {
            this.handlePage(window.event);
          }}>
          About
        </button>
        <button
          className={styles.ButtonItem}
          id='contact'
          onClick={() => {
            this.handlePage(window.event);
          }}>
          Contact
        </button>
        <div className={styles.Header} id='head'></div>
      </div>
    );
  }
}

export default Header;
