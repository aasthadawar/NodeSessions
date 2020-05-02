import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Header/Header.module.css';

const Header = () => {
  return (
    <div className={styles.links}>
      <NavLink activeClassName={styles.active}  to='/home'>Home</NavLink>
      <NavLink activeClassName={styles.active} to='/adduser'>Add User</NavLink>
      <NavLink activeClassName={styles.active} exact to='/about'>About</NavLink>
    </div>
  );
};

export default Header;
