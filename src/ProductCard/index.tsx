import React, { useState } from 'react';
import './index.css';

interface TProps {
  productName: string;
}

export const ProductCard = ({ productName }: TProps) => {
  const [count, setCount] = useState(0);
  const [limCount, setLimCount] = useState(0);

  const addCount = () => {
    if (count !== limCount && count < limCount) {
      setCount(count + 1);
    }
  };

  const deleteCount = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  const addLimCount = () => {
    setLimCount(limCount + 1);
  };

  const delLimCount = () => {
    if (limCount !== 0) {
      setLimCount(limCount - 1);
    }
    if (count === limCount && count !== 0) {
      setCount(count - 1)
    }
  };

  return (
    <>
      <div className="card_wrapper">
        <span>{productName}</span>
        <div className="button_section">
          <button onClick={addCount}>add</button>
          <span>{count}</span>
          <button onClick={deleteCount}>delete</button>
        </div>
      </div>
      <div className="limit_count">
          <button onClick={addLimCount}>add_max</button>
          <span>{`  __  ${limCount}  __  `}</span>
          <button onClick={delLimCount}>delete_max</button>
        </div>
    </>
  );
};
