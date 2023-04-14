import React from 'react';
import { Header } from '../../Components/Commons/Header';
import { Footer } from '../../Components/Commons/Footer';
import { PostCard } from '../../Components/Posts/PostCard';

export const PostsPage = () => {
  return (
    <div>
      <Header />
      <span>PostsPage</span>
      <PostCard />
      <Footer />
    </div>
  )
};
