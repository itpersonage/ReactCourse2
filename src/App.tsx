import React from 'react';
import styles from './App.module.scss';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './Containers/MainPage';
import { PostsPage } from './Containers/PostsPage';

function App() {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts" element={<PostsPage />} />
      </Routes>
    </div>
  );
}

export default App;
