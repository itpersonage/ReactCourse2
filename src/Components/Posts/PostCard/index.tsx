import React from 'react';
import styles from './PostCard.module.scss';

export const PostCard = () => {
  return (
    <div className={styles.cardWrapper}>
      <span className={styles.label}>Post Label</span>
      <p className={styles.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam asperiores aperiam eligendi
        voluptates sit beatae, qui dolor. Asperiores, odit, porro impedit cum consectetur
        dignissimos quam praesentium voluptatum, ipsam explicabo illum!
      </p>
    </div>
  );
};
