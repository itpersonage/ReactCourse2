import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import { Layout } from './Components/Commons/Layouts';
import { MainPage } from './Containers/MainPage';
import { PostPage } from './Containers/PostPage';
import { PostsPage } from './Containers/PostsPage';
import { ProductsPage } from './Containers/ProductsPage';
import { routes } from './utils/constants/routes';

function App() {
  return (
    <div className={styles.wrapper}>
      <Layout>
        <Routes>
          <Route path={routes.MAIN} element={<MainPage />} />
          <Route path={routes.PRODUCTS} element={<ProductsPage />} />
          <Route path={routes.POSTS}>
            <Route element={<PostsPage />} index />
            <Route path=":id" element={<PostPage />} />
          </Route>
          <Route />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
