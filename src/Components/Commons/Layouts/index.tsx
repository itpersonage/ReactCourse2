import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import styles from './Layouts.module.scss';

interface TProps {
  children: JSX.Element;
}

export const Layout = ({ children }: TProps) => {
  return (
    <div className={styles.postPageWrapper}>
      <Header />
      <div className={styles.contentWrapper}>{children}</div>
      <Footer />
    </div>
  );
};
