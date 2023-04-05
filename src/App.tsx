import React from 'react';
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
  return (
    <div className="App">
      {productArray.map(({ id, name }) => (
        <ProductCard productName={name} key={id} />
      ))}
    </div>
  );
}

export default App;
