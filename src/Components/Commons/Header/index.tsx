import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">MainPage</Link>
      <Link to="/posts">Post Page</Link>
      <Link to="/posts/21212" state = {'test state'}>One post page</Link>
    </header>
  );
};
