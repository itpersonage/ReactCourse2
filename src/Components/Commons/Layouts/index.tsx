import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import styles from './Layouts.module.scss';

interface Tprops {
  children: JSX.Element;
}

export const Layouts = ({ children }: Tprops) => {
  return (
    <div className={styles.mainPageWrapper}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
