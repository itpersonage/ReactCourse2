import React, { useState } from 'react';
import './index.css';

interface TProps {
  productName: string;
  limCount: number;
}

export const ProductCard = ({ productName, limCount }: TProps) => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  const deleteCount = () => {
    setCount(count - 1);
  };

  if (count > limCount && count !== 0) {
    setCount(count - 1);
  }

  return (
    <div className="card_wrapper">
      <span>{productName}</span>
      <div className="button_section">
        <button onClick={addCount} disabled={count >= limCount}>add</button>
        <span>{count}</span>
        <button onClick={deleteCount} disabled={count === 0}>
          delete
        </button>
      </div>
    </div>
  );
};
