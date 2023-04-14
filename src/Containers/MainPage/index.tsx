import React from 'react';
import { Header } from '../../Components/Commons/Header';
import { Footer } from '../../Components/Commons/Footer';
import { MainInfo } from '../../Components/Main/MainInfo';

export const MainPage = () => {
  return (
    <div>
      <Header />
      <span>MainPage</span>
      <MainInfo />
      <Footer />
    </div>
  );
};
