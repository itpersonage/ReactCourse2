import React, { useState } from 'react';
import './index.css';

export const LimitCount = () => {
  const [limCount, setLimCount] = useState(0);

  const addLimCount = () => {
    setLimCount(limCount + 1);
  };

  const delLimCount = () => {
    setLimCount(limCount - 1);
  };
  return (
    <div className="limit_count">
      <button onClick={addLimCount}>add</button>
      <span>{limCount}</span>
      <button onClick={delLimCount}>delete</button>
    </div>
  );
};
