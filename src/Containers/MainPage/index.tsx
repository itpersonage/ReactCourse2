import React from 'react';
import styles from './MainPage.module.scss';
import { Header } from '../../Components/Commons/Header';
import { Footer } from '../../Components/Commons/Footer';
import { MainInfo } from '../../Components/Main/MainInfo';

export const MainPage = () => {
  return (
    <div className={styles.mainPageWrapper}>
      <Header />
      <div>
        <span>MainPage</span>
        <MainInfo />
      </div>
      <Footer />
    </div>
  );
};
