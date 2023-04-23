import React from 'react';
import styles from './PostPage.module.scss';
import { PostCard } from '../../Components/Posts/PostCard';

export const PostsPage = () => {
  return (
    <div className={styles.postList}>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};
