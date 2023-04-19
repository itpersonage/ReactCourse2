import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">MainPage</Link>
      <Link to="/posts">Post Page</Link>
    </header>
  );
};
