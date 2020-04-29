import React from 'react';
import styles from '../Main/Main.module.css';
import { NavLink } from 'react-router-dom';

const Main = () => {
  // file for links for all the 3 questions
  return (
    <div className={styles.links}>
      <NavLink to='/users'>Users (Q1)</NavLink>
      <NavLink to='/students'>Students (Q2)</NavLink>
      <NavLink to='/header'>Headers (Q3)</NavLink>
    </div>
  );
};

export default Main;
