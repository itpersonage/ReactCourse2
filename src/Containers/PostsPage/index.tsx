import React from 'react';
import { PostCard } from '../../Components/Posts/PostCard';
import styles from './PostsPage.module.scss';

export const PostsPage = () => {
  return (
    <div className={styles.postList}>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};
