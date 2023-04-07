import React, { useState } from 'react';
import './App.css';
import { ProductCard } from './ProductCard';

const productArray = [
  {
    id: 1,
    name: 'Apple',
  },
  {
    id: 2,
    name: 'Orange',
  },
  {
    id: 3,
    name: 'Tomato',
  },
];

function App() {
  const [limCount, setLimCount] = useState(0);

  const addLimCount = () => {
    setLimCount(limCount + 1);
  };

  const delLimCount = () => {
    setLimCount(limCount - 1);
  };

  return (
    <div className="App">
      {productArray.map(({ id, name }) => (
        <ProductCard productName={name} key={id} limCount={limCount} />
      ))}
      <div className="limit_count">
        <button onClick={addLimCount}>add_max</button>
        <span>{`  __  ${limCount}  __  `}</span>
        <button onClick={delLimCount} disabled = {limCount === 0} >delete_max</button>
      </div>
    </div>
  );
}

export default App;
