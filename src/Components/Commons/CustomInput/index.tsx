import React, { useState } from 'react';

export const CustomInput = () => {
  const [inputValues, setInputValues] = useState('hgjh');

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues(event.target.value);
  };

  return (
    <div style={{ display: 'grid' }}>
      <span>{inputValues}</span>
      <input id="input" value={inputValues} onChange={inputChange} />
    </div>
  );
};
