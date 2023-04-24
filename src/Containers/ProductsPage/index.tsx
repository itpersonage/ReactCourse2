import React from 'react';
import { ProductCard } from '../../Components/Products/ProductCard';
import styles from './ProductsPage.module.scss';

export const ProductsPage = () => {
  return (
    <div className={styles.productsWrapper}>
      <ProductCard productName="Apple" />
      <ProductCard productName="Orange" />
    </div>
  );
};
