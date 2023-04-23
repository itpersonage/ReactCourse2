import React from 'react';
import styles from './App.module.scss';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './Containers/MainPage';
import { PostsPage } from './Containers/PostsPage';
import { PostPage } from './Containers/PostPage';
import { Layouts } from './Components/Commons/Layouts';

function App() {
  return (
    <div className={styles.wrapper}>
      <Layouts>
        <Routes>
          <Route path="/" element={<MainPage />} />
          PostPage
          <Route path="/posts">
            <Route element={<PostsPage />} index />
            <Route path=":id" element={<PostPage />} />
          </Route>
        </Routes>
      </Layouts>
    </div>
  );
}

export default App;
