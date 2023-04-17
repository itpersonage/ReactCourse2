import React from 'react';
import styles from './PostPage.module.css';
import { Header } from '../../Components/Commons/Header';
import { Footer } from '../../Components/Commons/Footer';
import { PostCard } from '../../Components/Posts/PostCard';

export const PostsPage = () => {
  return (
    <div className={styles.postPageWrapper}>
      <Header />
      <div className={styles.postList}>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <Footer />
    </div>
  );
};
