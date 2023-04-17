import React from 'react';
import styles from './PostCard.module.scss';

export const PostCard = () => {
  return (
    <div className={styles.cardWrapper}>
      <span className={styles.lable}>Post Lable</span>
      <p className={styles.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cum, placeat deserunt
        voluptatum distinctio maiores provident incidunt voluptatibus. Expedita animi illo quibusdam
        omnis doloremque voluptas reiciendis accusantium quaerat unde totam!
      </p>
    </div>
  );
};
