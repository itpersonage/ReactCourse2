import React, { useState } from 'react';

export const CustomInput = () => {
  const [inputValue, setInputValue] = useState('');
  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <input id="input" value={inputValue} onChange={inputChange} />
      <span>{inputValue}</span>
    </div>
  );
};
