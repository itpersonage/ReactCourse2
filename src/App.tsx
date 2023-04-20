import React from 'react';
import styles from './App.module.scss';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './Containers/MainPage';
import { PostsPage } from './Containers/PostsPage';
import { PostPage } from './Containers/PostPage';

function App() {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path="/" element={<MainPage />} />PostPage
        <Route path="/posts">
          <Route element={<PostsPage />} index />
          <Route path='one-post' element={<PostPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
