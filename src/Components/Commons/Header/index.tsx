import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../../utils/constants/routes';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={routes.MAIN}>Main Page</Link>
      <Link to={routes.POSTS}>Posts Page</Link>
      <Link to={`${routes.POSTS}/23131`} state={'test state'}>
        One post Page
      </Link>
      <Link to={routes.PRODUCTS}>Products Page</Link>
    </header>
  );
};
