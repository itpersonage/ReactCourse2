import React from 'react';
import styles from './App.module.scss';
import { PostsPage } from './Containers/PostsPage';

function App() {
  return (
    <div className={styles.wrapper}>
      <PostsPage />
    </div>
  );
}

export default App;
