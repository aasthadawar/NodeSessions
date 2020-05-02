import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.links}>
      <NavLink activeClassName={styles.active} to='/login'>login</NavLink>
      <NavLink activeClassName={styles.active}  to='/dashboard'>dashboard</NavLink>
    </div>
  );
};

export default Header;
